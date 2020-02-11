import React from 'react';
import Navbar from './navbar.jsx';


const Portfolio = (props) => {
    return (
        <div>
            <Navbar />
            <h1 className='title'>Portfolio</h1>
            <img className='photo' src="https://collinpersonal.s3.us-east-2.amazonaws.com/IH1.png"></img>
            <img className='photo' src="https://collinpersonal.s3.us-east-2.amazonaws.com/IH2.png"></img>
            <img className='photo' src="https://collinpersonal.s3.us-east-2.amazonaws.com/IH3.png"></img>
            <img className='photo' src="https://collinpersonal.s3.us-east-2.amazonaws.com/IH4.png"></img>
        </div>
    )
}



export default Portfolio;