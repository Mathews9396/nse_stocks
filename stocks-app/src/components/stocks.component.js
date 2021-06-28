import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Stocks(){
    return(
        <div className="stock-management">
        <h1>Manage stocks</h1>
        <ul>
            <Link to="/stocks/all">
            <h2>Display all Stocks</h2>
            </Link>
            <Link to="/stocks/find">
            <h2>Search for a Stocks</h2>
            </Link>
        </ul>
        </div>
    )
}

export default Stocks;