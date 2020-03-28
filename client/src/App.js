import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import SizingButtons from './components/SizingButtons'
import LoginModal from './components/LoginModal'

const App = () =>{
  const [cellSize, setCellSize] = useState(100)
  let rows = 10
  let width = 1000
  const [columns, setColumns] = useState(10)
  const handleClick = (e) => {
    if(e.target.id === 'increase-btn'){
      if(columns < 20){
        setColumns(columns - 1)

        setCellSize(width/columns)

      }
      
    }else if(e.target.id === 'decrease-btn'){
      if (columns > 4){
        setColumns(columns + 1)

        setCellSize(width/columns)

      }
    }
  }
  return (
    <div onClick = {handleClick}>
      
      <Navbar />
      <SizingButtons />
      <Grid size = {cellSize} rows = {rows} cols = {columns}/>
      <LoginModal/>
    </div>
  )
}

export default App;
//How to upload files to the server using JavaScript: https://flaviocopes.com/file-upload-using-ajax/
