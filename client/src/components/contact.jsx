import React from 'react';
import Navbar from './navbar.jsx';

const Contact = (props) => {
    return (
        <div>
            <Navbar />
            <h1>Have a question or want to work together?</h1>
            <form>
                Name: <input type='text' name='Name'></input>
                Email: <input type='text' name='Email'></input>
                Message: <input type='text' name='Message'></input>
                <button type='submit'>Submit</button>
            </form>
            <a id='Linkedin' href='https://www.linkedin.com/in/collin-fairlie-b9254b45/' target="_blank"></a>
            <a id='Github' href='https://github.com/clln62' target='_blank'></a>
        </div>
    )
}


export default Contact;