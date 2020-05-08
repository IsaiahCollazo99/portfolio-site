import React, { useEffect } from 'react';
import { useInput } from '../../util/customHooks/custhomHooks';

const EmailForm = ({ onFormSubmit, emailSuccess }) => {
    const useName = useInput("");
    const useEmail = useInput("");
    const useMessage = useInput("");

    useEffect(() => {
        if(emailSuccess) {
            resetForm();
        }
    })

    const resetForm = () => {
        useName.onChange({target: { value: "" }})
        useEmail.onChange({target: { value: "" }})
        useMessage.onChange({target: { value: "" }})
    }
    
    return (
        <form className="emailForm" onSubmit= {(e) => {
            e.preventDefault();
            onFormSubmit(useName.value, useEmail.value, useMessage.value);
        }} name="emailForm">
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