import React from 'react'

function StringInterpolation() {
    const text = "Hallo";
    const obj = {name: "Yinon", age: 1.5};

  return (
    <div>
        <h1>{text}</h1>
        <h2>{obj.name}</h2>
        <p>{obj.age}</p>
    </div>
  )
}

export default StringInterpolation