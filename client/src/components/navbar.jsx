import React from 'react';


const Navbar = (props) => {
    return (
        <div className="dropdown">
        <button className="dropbtn"> 
        </button>
        <div className="dropdown-content">
            <a href="/welcome">Welcome</a>
            <a href="/about">About</a>
            {/* <a href="/portfolio">Portfolio</a> */}
            <a href='/contact'>Contact</a>
        </div>
        </div>
    )
}


export default Navbar;