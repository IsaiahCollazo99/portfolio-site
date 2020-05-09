import React, { useState } from 'react';
import isaiah from '../../assets/image_contact.JPG';
import { FaLinkedin, FaJsSquare, FaGithubSquare } from 'react-icons/fa';
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
                <div className="contactInfo">

                    <a href="mailto:isaiahramoncollazo@gmail.com" className="contactEmail">isaiahramoncollazo@gmail.com</a>
                    
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank"><FaLinkedin className="icon" size="100px" color="#0077B5"/></a>
                        <a href="https://github.com/IsaiahCollazo99" target="_blank"><FaGithubSquare className="icon" size="100px" color="#24292E"/></a>
                        {/* <FaJsSquare className="js" size="100px" color="#E9D54D"/> */}
                    </div>
                </div>

            </div>

            <EmailForm onFormSubmit={onFormSubmit} emailSuccess={emailSuccess}/>
        </div>
    )
}

export default Contact;