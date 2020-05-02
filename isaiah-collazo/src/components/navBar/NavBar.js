import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navBar/navBar.css';

const NavBar = () => {
    return (
        <nav className="mainNav">
            <div className="navLinkContainer">
                <NavLink exact to="/" className="navLink">HOME</NavLink>
                <NavLink exact to="/projects" className="navLink">PROJECTS</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;