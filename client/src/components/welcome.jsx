import React from 'react';
import Navbar from './navbar.jsx';


const Welcome = (props) => {
    return (
        <div>
            <Navbar />
            <div id='welcome'>
                {/* <h1>Hello, my name is Collin Fairlie.</h1>
                <h1>I'm a Full Stack Software Engineer.</h1> */}
            </div>
        </div>
    )
}

export default Welcome;