import React from 'react';
import Navbar from './navbar.jsx';


const About = (props) => {
    return (
        <div>
            <Navbar />
            <h1 className='title text'>About Me</h1>
            <div className='photos'>
                <img className='photo' src='https://collinpersonal.s3.us-east-2.amazonaws.com/Collin.jpg'></img>
                <img className='photo' src='https://collinpersonal.s3.us-east-2.amazonaws.com/36684031_10156269046785953_8312068208156737536_o.jpg'></img>
                <img className='photo' src='https://collinpersonal.s3.us-east-2.amazonaws.com/F4425ADB-A905-4934-B71E-D339D9B004DC.JPG'></img>
            </div>
            <p className='text'>
                Before a career as an Engineer, Collin has had an eclectic life from debuting his 
                plays in Times Square and shooting films in Central Park, leading a marketing 
                campaign for a fashion designer to deploying to Iraq as an Infantryman in the 
                US Army. Quick thinking and problem-solving have always been a part of Collin's 
                life, and he looks forward to continuing that in the world of tech.
            </p>    
            <p className='text'>
                From a young age, following his computer tech father around, Collin has built 
                a long-standing interest in a wide variety of technologies. His drive for 
                analytical thinking and puzzles have been a driving force behind his ability 
                to pick up new trades with ease.
            </p>
            <p className='text'>
                Collin is a Full Stack Engineer with a passion for both front-end and back-end. 
                He has a drive for complex situations, finding ways to simplify them for others, 
                and creating something beautiful and unique.
            </p>
        </div>
    )
}


export default About;