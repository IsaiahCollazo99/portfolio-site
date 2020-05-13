import React from 'react';
import { useInput } from '../../util/customHooks/custhomHooks';

const EmailForm = () => {
    const useName = useInput("");
    const useEmail = useInput("");
    const useMessage = useInput("");

    return (
        <form className="emailForm" autoComplete="off" action="https://formspree.io/mjvaklbn" method="POST" name="emailForm">

            <div className="userInfo">
                <label for="name" className="nameLabel">Name: </label>
                <input type="text" {...useName} placeholder="Enter Your Name" name="name" required className="nameInput"/>

                <label for="_replyto" className="emailLabel">Email: </label>
                <input type="email" {...useEmail} placeholder="Enter Your Email" name="_replyto" required className="emailInput"/>
            </div>

            <div className="formMessage">
                <label for="message">Message: </label>
                <textarea {...useMessage} placeholder="Enter Your Message" name="message" required rows="20" cols="30"/>
            </div>

            <input type="submit" value="Send Message"/>
        </form>
    )
}

export default EmailForm;