import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h1>NSE-Stocks</h1>
            <ul className="nav-links">
                <NavLink to="/welcome" className="nav-link" activeClassName="nav-link-active">
                    <li>Home</li>
                </NavLink>

                <NavLink to="/stocks" className="nav-link" activeClassName="nav-link-active">
                    <li>Stocks</li>
                </NavLink>
                
                <NavLink to="/user" className="nav-link" activeClassName="nav-link-active">
                    <li>Profile</li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default Nav;