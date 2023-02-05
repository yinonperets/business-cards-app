import { useState } from 'react'

const useCounter = (initialCount = 0) => {
    const [counter, setCounter] = useState(initialCount)
    // if(typeof initialCount != 'number') return null

    const increment = () => setCounter(prev => prev + 1)
    const decrement = () => setCounter(prev => prev - 1)
    const reset = () => setCounter(initialCount)

    return [counter, increment, decrement, reset]
}

export default useCounter