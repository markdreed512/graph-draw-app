import React, { useState } from 'react'

export default function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

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
    return (
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
                    <input className = "button" type="submit" value = "Submit" onClick={props.toggleForm} />
                </form>
    )
}

