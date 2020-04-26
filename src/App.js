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
import AddProduct from "./Components/Admin/AddProduct";
import AddUser from "./Components/Admin/AddUser";
import ForgotPassword from "./Components/ForgotPassword";
import Admin from "./Components/Admin/Admin";

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
                  <Route path={"/admin/orders"} exact component={Admin_Orders}/>
                  <Route path={"/admin/addproduct"} exact component={AddProduct}/>
                  <Route path={"/admin/adduser"} exact component={AddUser}/>
                  <Route path={"/forgotpassword"} exact component={ForgotPassword}/>
                  <Route path={"/admin"} exact component={Admin}/>
              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
