import React from 'react';


const Contact = (props) => {
    return (
        <div>
            <h1>Have a question or want to work together?</h1>
            <form>
                Name: <input type='text' name='Name'></input>
                Email: <input type='text' name='Email'></input>
                Message: <input type='text' name='Message'></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default Contact;