import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import resume from '../../assets/Resume_Isaiah_Collazo.pdf';
import '../../css/navBar/navBar.css';

const NavBar = () => {
    const location = useLocation();

    const styles = {
        borderTopLeftRadius: location.pathname === "/" ? '10px' : '0',
        borderTopRightRadius: location.pathname === "/" ? '10px' : '0',
        padding: location.pathname === "/" ? '15px 10px' : '10px 0'
    }

    return (
        <nav className="mainNav">
            <div className="navLinkContainer">
                <NavLink exact to="/about" className="navLink" style={styles}>ME</NavLink>
                <NavLink exact to="/projects" className="navLink" style={styles}>MY WORK</NavLink>
                <NavLink to="/contact" className="navLink" style={styles}>CONTACT</NavLink>
                <a className="navLink lastNav" href={resume} target="_blank" rel="noopener noreferrer" style={styles}>RESUME</a>
            </div>
        </nav>
    )
}

export default NavBar;