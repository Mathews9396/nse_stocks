import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
// import Nav from './nav.component'

function StockDetail({ match }) {

    useEffect(() => {
        fetchItem()
    },[])

    const [item, setItem] = useState({});
    console.log(match);

    const fetchItem = async () => {
        await axios.get(`/stocks/all/${match.params.id}`,)
            .then((response) => {
                var outputStock = response.data.data[0]
                console.log(outputStock);
                setItem(outputStock);
            }).catch((err) => {
                console.log(err);
                throw err;
            })
    }

    return (
        <div className="stock-detail">
            <h1>{item.Name}</h1>
            <table className="stock-details-table">
                <tr className="stock-table-heading">
                    <th>Name</th>
                    <th>Current Market Price</th>
                    <th>Market Cap</th>
                    <th>Stock P/E</th>
                    <th>Dividend Yield</th>
                    <th>ROCE %</th>
                    <th>ROE Previous Annum</th>
                    <th>Debt to Equity</th>
                    <th>EPS</th>
                    <th>Reserves</th>
                    <th>Debt</th>
                </tr>
                <tr>
                    <th>{item.Name}</th>
                    <th>{item.Market_Price}</th>
                    <th>{item.Market_Cap}</th>
                    <th>{item.Stock}</th>
                    <th>{item.Dividend}</th>
                    <th>{item.ROCE}</th>
                    <th>{item.ROE}</th>
                    <th>{item.DebtToEquity}</th>
                    <th>{item.EPS}</th>
                    <th>{item.Reserves}</th>
                    <th>{item.Debt}</th>
                </tr>
            </table>
        </div>
    )
}

export default StockDetail;