import React from 'react';
import { useInput } from '../../util/customHooks/custhomHooks';

const EmailForm = ({ onFormSubmit }) => {
    const useName = useInput("");
    const useEmail = useInput("");
    const useMessage = useInput("");
    
    return (
        <form className="emailForm" onSubmit= {(e) => {
            e.preventDefault();
            onFormSubmit(useName.value, useEmail.value, useMessage.value);
        }}>
            <label for="name">Name: </label>
            <input type="text" {...useName} placeholder="Enter Your Name" name="name" required/>

            <label for="email">Email: </label>
            <input type="email" {...useEmail} placeholder="Enter Your Email" name="email" required/>

            <label for="message">Enter Your Message: </label>
            <input type="text" {...useMessage} placeholder="Enter Your Message" name="message" required/>

            <input type="submit" />
        </form>
    )
}

export default EmailForm;