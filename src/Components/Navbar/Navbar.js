import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className=""><a href="#">Profile</a></div>
            <div className=""><a href="#">Messages</a></div>
            <div className=""><a href="#">News</a></div>
            <div className=""><a href="#">Music</a></div>
            <div className=""><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;