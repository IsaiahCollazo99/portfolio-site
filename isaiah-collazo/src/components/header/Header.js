import React from 'react';
import NavBar from '../navBar/NavBar';
import '../../css/header/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">

            </div>

            <div className="headerRight">
                <NavBar />
            </div>
        </div>
    )
}

export default Header;