import React from 'react';
import './App.css';

function App() {

  const postStuff = () => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({"username": "ThisIsMyUsername"})
    }


    fetch('http://localhost:5051/users/add', options)
    .then((response)=>{
      console.log(response)
    })
  }

  return (
    <button onClick = {postStuff}>post data</button>
  );
}

export default App;
