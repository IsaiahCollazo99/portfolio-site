import React from 'react';
import isaiah from '../../assets/image_contact.JPG';
import '../../css/contact/contact.css';

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactPic">
                <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank" className="contactImgAnchor"><img src={isaiah} alt="isaiah" className="contactImg"/></a>
            </div>
        </div>
    )
}

export default Contact;