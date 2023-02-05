import './style/inlineStyle.css'
import React from 'react'

function InlineStyle() {
    const headlineStyle = {
        color: '#004466'
    }

    return (
        <>
        <h1 style={headlineStyle}>Inline Style</h1>
        <h2 style={{color: "#333333", fontWeight: 400}}>Subtitle</h2>
        <p className='red'>Pp</p>
        </>
    )
}

export default InlineStyle
