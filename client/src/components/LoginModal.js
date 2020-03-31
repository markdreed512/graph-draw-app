import React, { useState } from 'react'
import '../Assets/styles/LoginModal/LoginModal.css'
const LoginModal = (props) => {
    const [visible, setVisible] = useState("hidden")
    const [username, setUsername] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

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
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }
        fetch('http://localhost:5000/api/Users/add', options)
            .then((response)=>{
                console.log(response)
                setUsername("")
                setPassword1("")
                setPassword2("")
            })
    }
    
    const modalStyle = {
        
        visibility: `${visible}`
    }

    return (
        <i id="user-icon" className="fa fa-user" onClick={openLoginModal}>
            <div id="modal" style = {modalStyle}>
                <form onSubmit = {handleSubmit} action="submit">
                    <label >Sign Up</label>
                    <input className="input" 
                            onChange={(e)=> setUsername(e.target.value)} 
                            value = {username}
                            type="text" 
                            required 
                            placeholder="username"/>
                    <input className="input" 
                            onChange={(e)=> setPassword1(e.target.value)} 
                            value = {password1}
                            type="password" 
                            placeholder="password" />
                    <input className="input" 
                            onChange={(e)=> setPassword2(e.target.value)} 
                            value = {password2}
                            type="password" 
                            placeholder="password" />
                    <input className = "button" type="submit" value = "Submit" />
                </form>
            </div>
        </i>
    )
}
export default LoginModal