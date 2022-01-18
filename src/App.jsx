/* eslint-disable react/prop-types */
import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInOut from "./pages/sign-in-up/sign-in-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SignInOut} />
      </Switch>
    </div>
  );
}

export default App;
