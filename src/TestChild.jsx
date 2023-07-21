import React, { useEffect } from 'react'
import TestChildDos from './TestChildDos'

const TestChild = () => {

    useEffect(() => {
        console.log('render hijo 1')
    }, [])

    return (
        <div>
            <h2>hijo 1</h2>
            <TestChildDos />
        </div>
    )
}

export default TestChild
