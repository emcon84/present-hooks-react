// AppContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
    cart: [],
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'SET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('STATE', state)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
