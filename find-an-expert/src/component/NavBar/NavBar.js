import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';


class NavBar extends Component {
    render() {
    return(
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo" activeClassName="active">Find An Expert</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/languages" activeClassName="active">Languages</NavLink></li>
                <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
            </ul>         
        </div> 
       </nav>
        )
    }
}

export default NavBar;
