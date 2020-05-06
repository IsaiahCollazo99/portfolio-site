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
                    <p className="headerName">Isaiah Collazo</p>
                    <p className="headerJob">Web Developer</p>
                </div>
            </div>

            <div className="headerRight">
                <NavBar />
            </div>
        </div>
    )
}

export default Header;