import React, { useEffect } from 'react'
import TestChildTres from './TestChildTres'

const TestChildDos = () => {

    useEffect(() => {
        console.log('render hijo 2')
    }, [])


    return (
        <div>
            <h3>Hijo2</h3>
            <TestChildTres />
        </div>
    )
}

export default TestChildDos
