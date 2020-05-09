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
        <form className="emailForm" autoComplete="off" onSubmit= {(e) => {
            e.preventDefault();
            onFormSubmit(useName.value, useEmail.value, useMessage.value);
        }} name="emailForm">

            { emailSuccess ?
                <label for="userInfo" className="success">Email successfuly sent!</label> : null
            }

            { emailSuccess === false ? 
                <label for="userInfo" className="fail">Email not successful</label> : null
            } 

            <div className="userInfo">
                <label for="name" className="nameLabel">Name: </label>
                <input type="text" {...useName} placeholder="Enter Your Name" name="name" required className="nameInput"/>

                <label for="email" className="emailLabel">Email: </label>
                <input type="email" {...useEmail} placeholder="Enter Your Email" name="email" required className="emailInput"/>
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