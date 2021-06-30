import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Stocks from './components/stocks.component';
import AllStocks from './components/displayStocks/allStocks.component';
import StockDetail from './components/stockDetail.component';
import SearchStock from './components/searchStock/search-company.component';
import Nav from './components/nav.component';
import UserProfile from './components/user.component';
import Welcome from './components/welcome/welcome.component';
import StockResultDetail from './components/searchStock/stockResultDetail.component';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact>
          <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome" exact>
          <Welcome />
          </Route>
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/stocks/all" exact component={AllStocks} />
          <Route path="/stocks/all/:id" component={StockDetail} />
          <Route path="/stocks/find" component={SearchStock} />
          <Route path="/stocks/find/:name" component={StockResultDetail} />
          <Route path="/user" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;