import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export const Cart = () => {
    const { state, dispatch } = useContext(AppContext);

    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    return (
        <div style={{ position: 'absolute', top: '0', left: '90%' }}>
            <h2>Cart</h2>
            {state.cart && state.cart.length > 0
                ?
                <>
                    {state.cart.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </>
                :
                null
            }
        </div>
    );
};




