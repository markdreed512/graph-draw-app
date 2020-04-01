import React, { useState } from 'react'

export default function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:5000/api/Users/')
            .then((response) => {
                console.log(response)
            })
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div>
            <p>create an account <button onClick={props.toggleForm}>here</button></p>
            <form onSubmit={handleSubmit} action="submit">
                <label >Log In</label>
                <input className="input"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    required
                    placeholder="username" />
                <input className="input"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="password" />
                <input className="button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

