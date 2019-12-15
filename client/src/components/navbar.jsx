import React from 'react';


const Navbar = (props) => {
    return (
        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
            <a href="#">Welcome</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href='#'>Contact</a>
        </div>
        </div>
    )
}


export default Navbar;