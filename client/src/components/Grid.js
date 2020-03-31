import React from 'react'
import Cell from './Cell'

const tableStyle = {
    margin: `50px auto`,
    borderCollapse: `collapse`,
    backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e32ed81-05b9-462e-a468-a62cf6d21508/dciliso-8c4b8ff7-4e26-4b38-9cd8-c4099b64fd7e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMzJlZDgxLTA1YjktNDYyZS1hNDY4LWE2MmNmNmQyMTUwOFwvZGNpbGlzby04YzRiOGZmNy00ZTI2LTRiMzgtOWNkOC1jNDA5OWI2NGZkN2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RDeT53a2TCWUV3ysHQ1VBzE88XWpPPIWD7bnyVOXdoQ')`,
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