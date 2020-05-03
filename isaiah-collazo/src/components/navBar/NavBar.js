import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../../assets/Resume_Isaiah_Collazo.pdf';
import '../../css/navBar/navBar.css';

const NavBar = () => {
    return (
        <nav className="mainNav">
            <div className="navLinkContainer">
                <NavLink exact to="/" className="navLink">ME</NavLink>
                <NavLink exact to="/projects" className="navLink">PROJECTS</NavLink>
                <a className="navLink" href={resume} target="_blank">RESUME</a>
            </div>
        </nav>
    )
}

export default NavBar;