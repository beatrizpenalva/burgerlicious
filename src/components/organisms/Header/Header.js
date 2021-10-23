import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../../../img/logo.png'
import Sidebar from '../../Sidebar'
import ButtonContained from '../../atoms/ButtonContained'

const Header = ({ role, name }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [sidebarTitle, setSidebarTitle] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const history = useHistory()

  const nameFunction = () => {
    if (role === 'hall') return 'Attendant'
    return 'Chef'
  }

  // <span className='material-icons'>logout</span>
  // <span className='material-icons'>notifications</span>
  // <span className='material-icons'>history</span>
  // <span className='material-icons'>close</span>

  const handleLogout = () => {
    history.push('/')
    localStorage.clear()
  }

  const handleOpenSidebar = (title, status) => {
    setOrderStatus(status)
    setSidebarTitle(title)
    setSidebarIsOpen(true)
  }

  return (
    <>
      <header>
        <section>
          <div className='user-info'>
            <span className='team-work'>{nameFunction().toUpperCase()}:</span>{' '}
            {name.toUpperCase()}
          </div>
          <ButtonContained
            label='logout'
            classStyle='filled'
            type='button'
            handleClick={handleLogout}
          />
        </section>

        <img
          className='logo'
          src={logo}
          alt='logo'
          height='116px'
          width='141,6px'
        />

        <section className='buttons'>
          {role === 'kitchen' && (
            <ButtonContained
              label='update orders'
              classStyle='filled'
              type='button'
              handleClick={() => window.location.reload()}
            />
          )}

          {role === 'hall' && (
            <ButtonContained
              label='order in progress'
              classStyle='filled'
              type='button'
              handleClick={() =>
                handleOpenSidebar('order in progress', 'doing')
              }
            />
          )}

          <ButtonContained
            label='finish orders'
            classStyle='filled'
            type='button'
            handleClick={() => handleOpenSidebar('finish orders', 'finish')}
          />
        </section>
      </header>
      {sidebarIsOpen && (
        <Sidebar
          filterType={orderStatus}
          title={sidebarTitle}
          onClose={setSidebarIsOpen}
        />
      )}
    </>
  )
}

Header.propTypes = {
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Header
