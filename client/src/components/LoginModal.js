import React, { useState } from 'react'
import '../Assets/styles/LoginModal/LoginModal.css'
import SignUpForm from './SignUpForm'
const LoginModal = (props) => {
    const [visible, setVisible] = useState("hidden")

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

    return (
        <i id="user-icon" className="fa fa-user" onClick={openLoginModal}>
            <div id="modal" style = {modalStyle}>
                <SignUpForm />
            </div>
        </i>
    )
}
export default LoginModal