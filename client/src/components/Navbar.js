import React from 'react'
import logo from '../Assets/images/logo.png'
import LoginModal from './LoginModal'
function Navbar(){
    const headerStyle = {
        borderBottom: `1px solid teal`
    }
    const navListStyle = {    
        fontSize:`20px`,
        color: `teal`,
        fontFamily: `Maven Pro`,
        float: `right`,
        marginRight: `20px`
    }
    
    const liStyle = {
        display: `inline`,
        paddingRight: `20px`
    }
  
    const logoStyle = {
        width: `25px`,
        float: `left`,
        paddingTop: `15px`,
        paddingLeft: `15px`
    
    }
        
    const divStyle= {
        clear: `both`
    }
     
    
    return (
        <div style = {headerStyle}>
            <img style = {logoStyle} src={logo} alt=""/>
            <ul style={navListStyle}>
                <li style = {liStyle} id="modalLi" key="1"><LoginModal /></li>
                <li style = {liStyle} id="photosLi" key="2">My Photos</li>
                <li style = {liStyle} id="helpLi" key="3">Help</li>
            </ul>
            <div style={divStyle}/>
        </div>
    )

}
export default Navbar