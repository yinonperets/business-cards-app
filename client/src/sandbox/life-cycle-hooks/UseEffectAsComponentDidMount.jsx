import { useState, useEffect } from 'react'
import { getTime } from './utils'

const UseEffectAsComponentDidMount = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(`in useEffect: ${getTime()}`)
        setCount(prev => prev + 1)
    }, [])

  return (<div>
    {console.log(`in Render: ${getTime()}`)}
    Counter: {count}

    <button style={{padding: "10px 30px", borderRadius: '7px', backgroundColor: '#004466', color: '#fbfbfd'}} onClick={() => { setCount(prev => prev+1)}}>+</button>
  </div>)
}

export default UseEffectAsComponentDidMount