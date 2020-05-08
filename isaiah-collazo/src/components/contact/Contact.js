import React, { useState } from 'react';
import isaiah from '../../assets/image_contact.JPG';
import { FaLinkedin, FaJsSquare } from 'react-icons/fa';
import '../../css/contact/contact.css';
import EmailForm from './EmailForm';
import axios from 'axios';

const Contact = () => {
    const [emailSuccess, setEmailSuccess] = useState();

    const onFormSubmit = async (name, email, message) => {
        let res = await axios.post("/send", {name, email, message});
        const { status } = res.data;
        if(status === "success") {
            setEmailSuccess(true);
        } else {
            setEmailSuccess(false);
        }
    }
    
    return (
        <div className="contactContainer">
            <div className="contactPic">
                <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank" className="contactImgAnchor"><img src={isaiah} alt="isaiah" className="contactImg"/></a>
            </div>

            <div className="socialMedia">
                <FaLinkedin className="linkedIn" size="100px" color="#0077B5"/>
                {/* <FaJsSquare className="js" size="100px" color="#E9D54D"/> */}
            </div>

            { emailSuccess ?
                <label for="emailForm" className="success">Email successfuly sent!</label> : null
            }

            { emailSuccess === false ? 
                <label for="emailForm" className="fail">Email not successful</label> : null} 
            <EmailForm onFormSubmit={onFormSubmit} emailSuccess={emailSuccess}/>
        </div>
    )
}

export default Contact;