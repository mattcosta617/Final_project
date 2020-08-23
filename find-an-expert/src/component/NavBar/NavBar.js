import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <NavLink to="/">Find An Expert</NavLink>
            <NavLink to="/languages">Languages</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    )
}

export default NavBar;