import React from 'react';
import isaiah from '../../assets/image_contact.JPG';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import '../../css/contact/contact.css';
import EmailForm from './EmailForm';

const Contact = () => {

    const redirect = () => {
        window.open("https://www.linkedin.com/in/isaiahCollazo/", "_blank");
    }
    
    return (
        <div className="contactContainer">
            <div className="contactPic">
                <img src={isaiah} alt="isaiah" onClick={redirect}/>
                
                <div className="contactInfo">

                    <a href="mailto:isaiahramoncollazo@gmail.com" className="contactEmail" target="_blank" rel="noopener noreferrer">
                        isaiahramoncollazo@gmail.com
                    </a>
                    
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/IsaiahCollazo" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" size="75px" color="#0077B5"/>
                        </a>
                        <a href="https://github.com/IsaiahCollazo99" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className="icon" size="75px" color="#24292E"/>
                        </a>

                        <a href="https://twitter.com/IsaiahCollazo8" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare className="icon" size="75px" color="#1DA1F2" />
                        </a>
                    </div>
                </div>

            </div>

            <EmailForm />
        </div>
    )
}

export default Contact;