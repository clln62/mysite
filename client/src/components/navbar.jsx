import React from 'react';


const Navbar = (props) => {
    return (
        <div className="dropdown">
        <button className="dropbtn"> 
        </button>
        <div className="dropdown-content">
            <a href="#">Welcome</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href='#'>Contact</a>
        </div>
        </div>
    )
}


export default Navbar;