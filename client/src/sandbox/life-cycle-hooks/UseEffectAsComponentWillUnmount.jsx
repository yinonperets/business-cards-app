import { useState, useEffect } from 'react'
import { getTime } from './utils'

const UseEffectAsComponentWillUnmount = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(`in useEffect: ${getTime()}`)
        return () => console.log(`in useEffect return: ${getTime()}`)
    }, [])

    return (
        <div>
            {console.log(`in Render: ${getTime()}`)}
            <p>
                Counter: {count}
            </p>
            <button style={{padding: "10px 30px", borderRadius: '50px', backgroundColor: '#004466', color: '#fbfbfd', border: '0'}} onClick={() => { setCount(prev => prev+1)}}>+ Count</button>
        </div>
    )
}

export default UseEffectAsComponentWillUnmount