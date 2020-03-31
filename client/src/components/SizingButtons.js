import React from 'react'

function SizingButtons(){
   
    const divStyle = {
        margin: `100px 0 0 20px`,
        float: `left`,
        fontFamily: `arial`,
        color: `white`
    }
        
    
    const buttonStyle = {
        fontSize: `50px`,
        backgroundColor: `green`,
        display: `block`,
        width: `100px`
    }
        
    
    const pStyle = {
        color: `white`
    }
        
    
    return (
        <div style={divStyle}>
            <button id="increase-btn" style={buttonStyle}>+</button>
            <p style={pStyle}>Increase Cell Size</p>
            <button id="decrease-btn" style={buttonStyle}>-</button>
            <p style={pStyle}>Decrease Cell Size/</p>
        </div>
    )
}

export default SizingButtons