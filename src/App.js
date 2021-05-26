import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/common/Header";
import SideBar from "./component/common/SideBar";
import Dashboard from "./page/Dashboard";
import Oder from "./page/Oders";
import Category from "./page/Category";
import Product from "./page/Products";
import User from "./page/Users";
import ProductDetail from "./page/ProductDetail";
import ProductAdd from "./page/AddProduct";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="flexPage">
          <SideBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/oders" component={Oder} />
            <Route path="/category" component={Category} />
            <Route path="/products" component={Product} />
            <Route path="/product-add" component={ProductAdd} />
            <Route path="/products-detail/:id" component={ProductDetail} />
            <Route path="/users" component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
