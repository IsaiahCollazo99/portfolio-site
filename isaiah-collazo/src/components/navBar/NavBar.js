import react from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="mainNav">
            <NavLink exact to="/">HOME</NavLink>
            <NavLink exact to="/projects">PROJECTS</NavLink>
        </nav>
    )
}

export default NavBar;