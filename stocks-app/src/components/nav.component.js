import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h1>NSE-Stocks</h1>
            <ul className="nav-links">
                <Link to="">
                    <li>Home</li>
                </Link>

                <Link to="/stocks">
                    <li>Stocks</li>
                </Link>
                
                <Link to="/user">
                    <li>Profile</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;