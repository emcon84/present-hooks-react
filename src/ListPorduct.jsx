import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';

export const ListPorduct = () => {
    const { dispatch } = useContext(AppContext);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const productList = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ];

    return (
        <div>

            <Cart />

            <h3>Product List</h3>
            <div style={{ display: 'flex', gap: 10 }}>
                {productList.map(product => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <br />
            <Link to={'/checkout'}>
                <button>Checkout</button>
            </Link>
            <Link to={'/Test'}>
                <button>Test</button>
            </Link>
        </div>
    )
}


