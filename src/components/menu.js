import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Burger from '../components/burgeroptions'
import Sides from '../components/sides'
import Drinks from '../components/drinks'
import Snacks from '../components/snacks'
import Coffee from '../components/coffee'

const Menu = () => {
    const [option, setOptions] = useState('');
    const Details = ({ item }) => {
        return (
            <>
                {item === 'Snacks' && (
                    <Snacks />
                )}
                {item === 'DrinksCoffee' && (
                    <Coffee />
                )}
                {option === 'Burgers' && (
                    <Burger />
                )}

                {option === 'Sides' && (
                    <Sides />
                )}
                {option === 'Drinks' && (
                    <Drinks />
                )}
            </>
        )
    }

    return (
        <>
            <section className="items-accordion">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            BREAKFAST
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-accordion">
                                <section className="item-menu">
                                    <button className="menu-button" onClick={() => setOptions('Snacks')}>
                                        Snacks
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                    <button className="menu-button last-menu-item" onClick={() => setOptions('DrinksCoffee')}>
                                        Drinks
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                </section>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            BURGER
                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <section className="item-menu">
                                    <button className="menu-button" onClick={() => setOptions('Burgers')}>
                                        Burgers
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button >
                                    <button className="menu-button" onClick={() => setOptions('Sides')}>
                                        Sides
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                    <button className="menu-button last-menu-item" onClick={() => setOptions('Drinks')}>
                                        Drinks
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                </section>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>
            <section className="detailsk">
                <Details item={option} />
            </section>
            <button className="send-button">ADD ITEM</button>
        </>
    )
};

export default Menu;