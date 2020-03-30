import React, { useState } from 'react'
import styled from 'styled-components'


const LoginModal = (props) => {
    const [visible, setVisible] = useState("hidden")
    const [username, setUsername] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
//     const Modal = styled.div`
//     width: 500px;
//     height: 400px;
//     background-color: rgba(0, 100, 100, .8);
//     color: white;
//     position: absolute;
//     float: left;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 1;
//     font-family: arial;
//     font-size: 30px;
//     border-radius: 10px;
//     box-shadow: 2px 2px 5px grey;
//     visibility: ${visible}
// `
    const Input = styled.input`
    display: block;
    font-size: 20px;
    background-color: rgba(255,255,255, .6);
    margin: 30px auto;
    padding: 10px;
    color: black;
    border-radius: 4px;
`
    const Button = styled.input`
    display: block;
    font-size: 20px;
    background-color: rgba(0,255,255);
    margin: 30px auto;
`
    const Label = styled.label`
        display: block;
        margin-top: 40px ;
`
    const Div = styled.div`
    text-align: center;
`

    const openLoginModal = (e) => {
        if (e.target.id === "user-icon") {
            if (visible === "hidden") {
                setVisible("visible")
            } else {
                setVisible("hidden")
            }
        }


    }
   
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            "username": username,
            "password1": password1,
            "password2": password2
        }
        const options = {
            method: 'POST'
            ,
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }
        fetch('http://localhost:5000/api/Users/add', options)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log(data)
            })
    
    }
    
    const myStyle = {
    width: '500px',
    height: `400px`,
    backgroundColor: `rgba(0, 100, 100, .8)`,
    color: `white`,
    position: `absolute`,
    float: `left`,
    left: `50%`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
    zIndex: `1`,
    fontFamily: `arial`,
    fontSize: `30px`,
    borderRadius: `10px`,
    boxShadow: `2px 2px 5px grey`,
    visibility: `${visible}`

    }

    return (

        <i id="user-icon" className="fa fa-user" onClick={openLoginModal}>
            {/* <Modal > */}
            <div style = {myStyle}>
                {/* <Div> */}
                <div>
                    <form onSubmit = {handleSubmit} action="submit">
                        <label >Sign Up</label><br/>
                        <input onChange={(e)=> setUsername(e.target.value)} 
                               value = {username}
                               type="text" 
                               required 
                               placeholder="username"/><br/>
                        <input onChange={(e)=> setPassword1(e.target.value)} 
                               value = {password1}
                               type="password" 
                               placeholder="password" /><br/>
                        <input onChange={(e)=> setPassword2(e.target.value)} 
                               value = {password2}
                               type="password" 
                               placeholder="password" /><br/>
                        <input type="submit" value = "Submit" />
                    </form>
                   

                </div>
                
            </div>
        </i>
    )
}
export default LoginModal