import React, { useState } from 'react'
import '../Assets/styles/LoginModal/LoginModal.css'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
const LoginModal = (props) => {
    const [visible, setVisible] = useState("hidden")
    const [displayLogin, setDisplayLogin] = useState(true)
    const openLoginModal = (e) => {
        if (e.target.id === "user-icon") {
            if (visible === "hidden") {
                setVisible("visible")
            } else {
                setVisible("hidden")
            }
        }
    }
   
    const modalStyle = {
        
        visibility: `${visible}`
    }
    const toggleForm= (e) => {
        setDisplayLogin(!displayLogin)
        
    }
    return (
        <i id="user-icon" className="fa fa-user" onClick={openLoginModal}>
            <div id="modal" style = {modalStyle}>
                {displayLogin? <LogInForm toggleForm={toggleForm}/> : <SignUpForm toggleForm={toggleForm}/>}           
            </div>
        </i>
    )
}
export default LoginModal