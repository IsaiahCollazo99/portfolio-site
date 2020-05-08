import React from 'react';
import isaiah from '../../assets/image_contact.JPG';
import { FaLinkedin, FaJsSquare } from 'react-icons/fa';
import '../../css/contact/contact.css';
import EmailForm from './EmailForm';

const Contact = () => {

    const onFormSubmit = (name, email, message) => {
        debugger;
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

            <EmailForm onFormSubmit={onFormSubmit} />
        </div>
    )
}

export default Contact;