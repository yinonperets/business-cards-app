import React from 'react'
import useCounter from './useCounter'

const CustomCounterHook = () => {
    const [counter, increment, decrement, reset] = useCounter();

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment} style={{padding: 3}}>increment</button>
            <button onClick={decrement} style={{padding: 3}}>decrement</button>
            <button onClick={reset} style={{padding: 3}}>reset</button>
        </div>
    )
}

export default CustomCounterHook