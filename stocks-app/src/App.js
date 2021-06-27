import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from 'axios';
import Stocks from './components/stocks.component';
import AllStocks from './components/displayStocks/allStocks.component';
import StockDetail from './components/stockDetail.component';
import SearchStock from './components/searchStock/search-company.component';
import Nav from './components/nav.component';
import UserProfile from './components/user.component';
import Authentication from './components/authentication/authentication.component';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Authentication} />
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/stocks/all" exact component={AllStocks} />
          <Route path="/stocks/all/:id" component={StockDetail} />
          <Route path="/stocks/find" component={SearchStock} />
          <Route path="/user" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;