import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Destination await</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src='https://images.unsplash.com/photo-1605148517575-3cc146936f38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2531&q=80'
                            text='Exploring the hidden Cenotes in Tulum, and getting unforgetable memories'
                            label='Adventure'
                            path='/tours'
                        />
                        <CardItem
                            src='https://images.unsplash.com/photo-1605216663980-b7ca6e9f2451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80'
                            text='Snorkeling in the turquoise beach'
                            label='Adventurous'
                            path='/tours'
                        />
                        <CardItem
                            src='https://images.unsplash.com/photo-1561577101-aa749bffbb70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'
                            text='Wandering in the Mayan ruined Chichen Itza with the exclusive guide'
                            label='Historical'
                            path='/tours'
                        />
                        <CardItem
                            src='https://images.unsplash.com/photo-1620095198790-2f663d67677d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'
                            text='Exclusive city walking tour'
                            label='Adventure'
                            path='/tours'
                        />
                        <CardItem
                            src='https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2573&q=80'
                            text='The best local food tour ever in Cancun'
                            label='Food'
                            path='/tours'
                        />
                        <CardItem
                            src='https://images.unsplash.com/photo-1569369926169-9ee7fb80adeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1726&q=80'
                            text='Treat yourseft at the top resorts in Cancun'
                            label='Relaxing'
                            path='/tours'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
