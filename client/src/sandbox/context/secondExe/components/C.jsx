import React from 'react'
import { useName } from '../NameProvider'

const C = () => {
    const { name, setName } = useName()

    return <>
        <p>in C component: { name }</p>
        <input type="text" onChange={e => setName(e.target.value)} />
    </>
}

export default C