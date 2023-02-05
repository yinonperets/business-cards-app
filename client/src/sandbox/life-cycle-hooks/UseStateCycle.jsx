import { useState } from 'react'

const UseStateCycle = () => {
    const [ count, setCount ] = useState(()=>{
        console.log(`in useState() - ${new Date().toLocaleTimeString()}`);
        setTimeout(()=>{
            setCount(prev => prev + 1)
        }, 2000);
        return 0;
    });

    return (
        <div>
            <div>Count: {count}</div>
            {console.log(`in Render - ${new Date().toLocaleTimeString()}`)}
        </div>
    )
}

export default UseStateCycle