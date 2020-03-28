import React, { useState } from 'react'
import './Cell.css'

function Cell(props) {
    const myStyle = {
        width: props.size + "px",
        height: props.size + "px"
    }
    const [opaque, setOpaque] = useState( true )
    const handleClick = () => {
        setOpaque(!opaque)
    }
    return (
        <td style= {myStyle} className = {opaque? "opaque" : "transparent"} onClick = { handleClick }></td>
    )
}

export default Cell