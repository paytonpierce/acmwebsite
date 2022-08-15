import './Header.css'
import logo from "../../Images/acmLogo.png";
import React from "react";

function toAbout(){
    window.location.href = "/about";
}
function toHome(){
    window.location.href = "/";
}
function toSignUp(){
    window.location.href = "/signup";
}
function toOfficerPage(){
    window.location.href = "/officers";
}
function toLinks(){
    window.location.href = "/links";
}
function Header() {
    return ( 
        <div>
        <div className="header-box">
        <img src={logo} alt="" className="logo" />
        <p className="header-left">WFU Chapter of ACM</p>
        <p className="header-right" onClick={() => toSignUp()}>Sign Up</p>
        <p className="header-right" onClick={() => toLinks()}>Links</p>
        <p className="header-right" onClick={() => toOfficerPage()}>Officers</p>
        <p className="header-right" onClick={() => toAbout()}>About</p>
        <p className="header-right" onClick={() => toHome()}>Home</p>
        </div>
        </div>
    );
}

export default Header;