import React, { useState, useContext } from 'react'
import GridColorContext from './GridColorContext'
import './Cell.css'

function Cell(props) {
    const [ gridColor, setGridColor ] = useContext(GridColorContext)
    const myStyle = {
        width: props.size + "px",
        height: props.size + "px",
        border: `1px solid ${gridColor}`
    }
    const [opaque, setOpaque] = useState( true )
    const handleClick = () => {
        setOpaque(!opaque)
    }
    return (
        <td 
            style= {myStyle} 
            className = {opaque? "opaque" : "transparent"} 
            onClick = { handleClick }
        >
        </td>
    )
}

export default Cell