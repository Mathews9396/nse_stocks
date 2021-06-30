import React, { useState, useEffect } from 'react';
import '../../App.css';
import http from '../../http-common';

function StockResultDetail({ keyword }) {

    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState({});
    const [displayResult, setDisplayResult] = useState('inactive');

    // console.log(match);

    const fetchItem = async () => {
        await http.get(`stocks/find/${keyword}`,)
            .then((response) => {
                console.log(response.data);
                if (response.data.message === "no records found") {
                    alert("no records found under this keyword");
                    setDisplayResult('noRecords');
                }
                else {
                    var outputStock = response.data.data[0];
                    console.log(outputStock);
                    setDisplayResult('active');
                    setItem(outputStock);
                }
            }).catch((err) => {
                alert('Need to authenticate to search')
                throw err;
            })
    }

    return (
        <div>
        { displayResult=== 'active' && (
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
        )}
        {displayResult==='inactive' && (
            <div></div>
        )}
        {displayResult==='noRecords' && (
            <h3>No records found</h3>
        )}
        </div>
    )
}

export default StockResultDetail;