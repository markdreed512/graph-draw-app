import React from 'react'
import styled from 'styled-components'
// import logo from '../assets/images/logo.png'
import LoginModal from './LoginModal'
function Navbar(){
    const Header = styled.div`
        border-bottom: 1px solid teal;
    `
    const NavList = styled.ul`
        font-size:20px;
        color: teal;
        font-family: Maven Pro;
        float: right;
        margin-right: 20px;
    `
    const Li = styled.li`
        display: inline;
        padding-right: 20px;
    `
    // const Logo = styled.img`
    //     width: 25px;
    //     float: left;
    //     padding-top: 15px;
    //     padding-left: 15px;
    // `
    const ClearFloat= styled.div`
        clear: both
    `
    
    return (
        <Header>
            {/* <Logo src={logo} alt=""/> */}
            
            <NavList>
                <Li><LoginModal /></Li>
                <Li>My Photos</Li>
                <Li>Help</Li>
            </NavList>
            <ClearFloat/>
        </Header>
    )

}
export default Navbar