import { useState, useEffect } from 'react'
import { getTime } from './utils'

const UseEffectNoDependancies = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    useEffect(()=>{
        console.log(`in useEffect: ${getTime()}`)
    })
  return (
    <div>
        {console.log(`in Render: ${getTime()}`)}
            <p>
                Counter: {count}
            </p>
            <p>
                Num: {num}
            </p>

            <button style={{padding: "10px 30px", borderRadius: '7px', backgroundColor: '#004466', color: '#fbfbfd', border: '0'}} onClick={() => { setCount(prev => prev+1)}}>+ Count</button>
            <button style={{padding: "10px 30px", borderRadius: '7px', backgroundColor: '#004466', color: '#fbfbfd', border: '0'}} onClick={() => { setNum(prev => prev+1)}}>+ Num</button>
    </div>
  )
}

export default UseEffectNoDependancies