import React from 'react';
import Navbar from './navbar.jsx';

const Contact = (props) => {
    return (
        <div>
            <Navbar />
            <h1>Have a question or want to work together?</h1>
            <form action="mailto:collin.fairlie@gmail.com" method="post" enctype="text/plain">
                Name: <input type='text' name='name' value={props.name} onChange={props.onChangeContact}></input>
                Email: <input type='text' name='email' value={props.email} onChange={props.onChangeContact}></input>
                Message: <input type='text' name='message' value={props.message} onChange={props.onChangeContact}></input>
                <button type='submit'>Submit</button>
            </form>
            <a id='Linkedin' href='https://www.linkedin.com/in/collin-fairlie-b9254b45/' target="_blank"></a>
            <a id='Github' href='https://github.com/clln62' target='_blank'></a>
        </div>
    )
}


export default Contact;