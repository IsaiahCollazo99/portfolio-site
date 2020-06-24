import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../../assets/Resume_Isaiah_Collazo.pdf';
import '../../css/navBar/navBar.css';

const NavBar = () => {
    return (
        <nav className="mainNav">
            <div className="navLinkContainer">
                <NavLink exact to="/" className="navLink">ME</NavLink>
                <NavLink exact to="/projects" className="navLink">MY WORK</NavLink>
                <NavLink to="/contact" className="navLink">CONTACT</NavLink>
                <a className="navLink lastNav" href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
            </div>
        </nav>
    )
}

export default NavBar;