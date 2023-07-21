import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';

export const Checkout = () => {

    return (
        <>

            <Cart />

            <div>
                <h2>Checkout</h2>
            </div>
            <Link to={'/'}>
                <button>Lista de productos</button>
            </Link>
        </>

    )
}
