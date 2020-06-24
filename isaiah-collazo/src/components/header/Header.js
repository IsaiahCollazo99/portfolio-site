import React from 'react';
import NavBar from '../navBar/NavBar';
import logo from '../../assets/logo.png';
import '../../css/header/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img src={logo} alt="Logo" className="headerLogo" /></Link>
                
                <div className="headerText">
                    <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank" className="noDecoration white" rel="noopener noreferrer">
                        <p className="headerName">Isaiah Collazo</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank" className="noDecoration grey" rel="noopener noreferrer">
                        <p className="headerJob">Web Developer</p>
                    </a>
                </div>
            </div>

            <div className="headerRight">
                <NavBar />
            </div>
        </div>
    )
}

export default Header;