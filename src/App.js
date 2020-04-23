import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ShoppingCart from "./Components/ShoppingCart";
import Order from "./Components/Order";
import Admin_Orders from "./Components/Admin/Admin-Orders";

function App() {
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route path={"/"} exact component={Main} />
                  <Route path="/product/:pdcID" component={Product} / >
                  <Route path={"/login"} exact component={Login} />
                  <Route path={"/register"} exact component={Register} />
                  <Route path={"/cart"} exact component={ShoppingCart} />
                  <Route path={"/order"} exact component={Order}/>
                  <Route path={"/admin-orders"} exact component={Admin_Orders}/>
              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
