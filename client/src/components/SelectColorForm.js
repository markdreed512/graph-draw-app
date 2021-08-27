import React, { useContext, useState } from "react";
import GridColorContext from "./GridColorContext";

function SelectColorForm() {
    const [ gridColor, setGridColor ] = useContext(GridColorContext)
    const [ selection, setSelection ] = useState("")
    const handleChange = (e) => {
        setSelection(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.children[1].value)
        setGridColor(selection)
    }
  return (
    <form onSubmit={handleSubmit}>
      <label for="cars">Choose a color:</label>
      <select id="colors" name="colors" onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <button>OK</button>
    </form>
  );
}

export default SelectColorForm;
