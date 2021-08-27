import React from 'react'
import Cell from './Cell'

const tableStyle = {
    margin: `50px auto`,
    borderCollapse: `collapse`,
    backgroundImage: `url('https://wallpapercave.com/wp/wp2215544.jpg')`,
    backgroundSize: `100%`,
    backgroundRepeat: `no-repeat`
}



function Grid(props) {
    const cellsArr = Array(props.cols).fill("dummyData")
    const rowsArr = Array(props.rows).fill("dummyData")
    return (<table style = {tableStyle}>
        <tbody>
            {rowsArr.map((each, i) => {
                return (
                    <tr key={i}>
                        {cellsArr.map((each, i) => {
                            return <Cell size={props.size} key={i}/>
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>)
}

export default Grid;