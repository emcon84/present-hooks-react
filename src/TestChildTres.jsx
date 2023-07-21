import React, { useContext, useEffect } from 'react'
import { AppContext } from './AppContext';
import { Cart } from './Cart';

const TestChildTres = () => {

    const { state, dispatch } = useContext(AppContext);



    useEffect(() => {
        console.log('render hijo 3')
    }, [])

    return (
        <div>
            <Cart />
            <h4>Hijo3</h4>
        </div>
    )
}

export default TestChildTres
