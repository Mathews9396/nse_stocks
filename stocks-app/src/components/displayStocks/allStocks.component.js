import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';

function AllStocks() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        await axios.get('/stocks/all',)
            .then((response) => {
                console.log(response.data.data);
                setItems(response.data.data);
            }).catch((err) => {
                console.log(err);
                throw err;
            })
    }

    return (
        <div className="allstocks">
            {items.map(item => (
                <Link to={`/stocks/all/${item.Sl_No}`}>
                    <h4 className="stock-name" key={item.Sl_No}>
                        <button className="button-stock">
                            {item.Sl_No}<br></br>{item.Name}
                        </button>
                    </h4>
                </Link>
            ))}
        </div>
    )
}

export default AllStocks;