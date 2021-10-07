import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Itens = ({ list, createItemObject }) => {
  const [items, setItems] = useState({})

  function callCreate(array) {
    array.map((arr) => createItemObject(arr[0], arr[1]))
  }

  const handleClick = (elements) => {
    const getEntries = Object.entries(elements)
    callCreate(getEntries)
    setItems({})
  }

  return (
    <>
      <section className='menu-description'>
        {list.length &&
          list.map((item) => {
            let count

            if (items[item.id]) count = items[item.id]
            else count = 0

            return (
              <section className='item-description' key={item.name}>
                <p className='product'>{item.name}</p>
                <p className='price'>${item.price}</p>
                <section className='input-group'>
                  <button
                    type='button'
                    className='count-button'
                    onClick={() => setItems({ ...items, [item.id]: count + 1 })}
                  >
                    {' '}
                    +{' '}
                  </button>
                  <p className='quantity-field'>{count}</p>
                  <button
                    type='button'
                    className='count-button'
                    onClick={() =>
                      count > 0 && setItems({ ...items, [item.id]: count - 1 })
                    }
                  >
                    {' '}
                    -{' '}
                  </button>
                </section>
              </section>
            )
          })}
      </section>
      <button
        type='button'
        className='send-button'
        onClick={() => handleClick(items)}
      >
        ADD ITEM
      </button>
    </>
  )
}

Itens.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  createItemObject: PropTypes.func.isRequired,
}

export default Itens
