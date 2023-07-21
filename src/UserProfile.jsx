import React, { useContext } from 'react'
import { AppContext } from './AppContext';

export const UserProfile = () => {
    const { state, dispatch } = useContext(AppContext);

    const updateUser = (name) => {
        dispatch({ type: 'SET_USER', payload: { name } });
    };

    return (
        <div>
            <h2>User Profile</h2>
            {state.user ? (
                <div>
                    <p>Name: {state.user.name}</p>
                    <p>Address: {state.user.address}</p>
                </div>
            ) : (
                <button onClick={() => updateUser('John Doe')}>Set User</button>
            )}
        </div>
    );
};


