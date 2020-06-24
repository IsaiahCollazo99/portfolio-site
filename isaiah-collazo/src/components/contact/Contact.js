import React from 'react';
import isaiah from '../../assets/image_contact.JPG';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import '../../css/contact/contact.css';
import EmailForm from './EmailForm';

const Contact = () => {
    
    return (
        <div className="contactContainer">
            <div className="contactPic">
                <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank" className="contactImgAnchor" rel="noopener noreferrer">
                    <img src={isaiah} alt="isaiah" className="contactImg"/>
                </a>
                <div className="contactInfo">

                    <a href="mailto:isaiahramoncollazo@gmail.com" className="contactEmail">isaiahramoncollazo@gmail.com</a>
                    
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" size="100px" color="#0077B5"/>
                        </a>
                        <a href="https://github.com/IsaiahCollazo99" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className="icon" size="100px" color="#24292E"/>
                        </a>
                    </div>
                </div>

            </div>

            <EmailForm />
        </div>
    )
}

export default Contact;