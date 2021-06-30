import React, { useState, useEffect } from 'react';
// import http from '../../http-common';
import '../../App.css'
import './searchBar.css'
import { Link } from 'react-router-dom';
import StockResultDetail from './stockResultDetail.component'

function SearchStock() {

    const [company, setCompany] = useState('');
    const [display, setDisplay] = useState('inactive');


    const triggerResult = () => {
        setDisplay('active');
    }

    return (
        <div className="search-stocks">
            <h1>Search for a company</h1>
            <input
                className="search-bar"
                key="random1"
                value={company}
                placeholder={"search stocks"}
                onChange={(e) => {
                    setCompany(e.target.value)
                    setDisplay('inactive')
                    }
                }
            />
            <Link to={`/stocks/find/${company}`}>
                <button className="search-stock-button" onClick={triggerResult}>
                    Search
                </button>
            </Link>
            {display === 'active' && (
                <StockResultDetail keyword={company} />
            )}

        </div>
    )
}

export default SearchStock;

// {displayResult==='active' &&(
//     <StockResultDetail />
// )}