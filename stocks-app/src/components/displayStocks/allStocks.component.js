import React, { useState, useEffect } from 'react';
import http from '../../http-common';
import '../../App.css';
import { Link } from 'react-router-dom';
// import { response } from 'express';

function AllStocks() {
    try {
        useEffect(() => {
            fetchItems()
        }, [])

        const [items, setItems] = useState([]);

        const fetchItems = async () => {
            await http.get('/stocks/all',{
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then((response) => {
                console.log(response);
                setItems(response.data.data);
            }).catch((err) => {
                 alert("Need to authenticate to access this page");
            })
        }
        return (
            <div className="allstocks">
                {items.map(item => (
                    <Link to={`/stocks/all/${item.Sl_No}`} >
                        <h4 className="stock-name" key={item.Sl_No}>
                            <button className="button-stock">
                                {item.Sl_No}<br></br>{item.Name}
                            </button>
                        </h4>
                    </Link>
                ))}
            </div>
        )
    } catch (err) {
        throw err;
    }


}

export default AllStocks;