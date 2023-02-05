import React from 'react'
import NameProvider from '../NameProvider'
import B from './B'

const A = () => {
  return (
    <NameProvider>
        <p>in A component</p>
        <B/>
    </NameProvider>
  )
}

export default A