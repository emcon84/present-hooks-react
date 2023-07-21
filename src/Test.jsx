import React, { useContext, useEffect } from 'react'
import TestChild from './TestChild'
import { AppContext } from './AppContext';

const Test = () => {

    const { state, dispatch } = useContext(AppContext);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const productList = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ];

    useEffect(() => {
        console.log('render Padre')
    }, [])

    return (
        <div>
            <h1>Test Padre</h1>
            <h3>Product List</h3>
            <div style={{ display: 'flex', gap: 10 }}>
                {productList.map(product => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <TestChild />
        </div>
    )
}

export default Test
