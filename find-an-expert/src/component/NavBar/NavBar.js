import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';


class NavBar extends Component {
    render() {
    return(
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo homeNavigation" activeClassName="active">Find An Expert</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down" id="navigation">
                <li><NavLink to="#about" className="navClass">About</NavLink></li>
                <li><NavLink to="/languages" className="navClass" activeClassName="active">Languages</NavLink></li>
                <li><NavLink to="/profile" className="navClass" activeClassName="active">Profile</NavLink></li>
            </ul>         
        </div> 
       </nav>
        )
    }
}

export default NavBar;
