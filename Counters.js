import React, { Component, useState, useEffect } from 'react';

const Counters = () => {
    const [ counterValue, setCounterAction  ] = useState(0)

    useEffect(() => {
        console.log(counterValue, 'counterValue')
        if (counterValue > 5) {
            setCounterAction(0)
        }
    }, [counterValue])

    const handleCounterAction = action  => {
        if (action === 'increment') {
            setCounterAction(counterValue + 1)
        } else if (action === 'decrement') {
            setCounterAction(counterValue - 1)
        } else {
            setCounterAction(0)
        }
    }

    return (
        <div>
        <button> {counterValue} </button>
        <button onClick={() => handleCounterAction('increment')}>increment</button>
        <button onClick={() => handleCounterAction('decrement')}> decrease </button>
        <button onClick={() => handleCounterAction('reset')}> Reset </button>
        </div>
    );
}
export default Counters;  
