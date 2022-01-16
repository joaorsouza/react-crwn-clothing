/* eslint-disable react/prop-types */
import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";
import { Route } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props.match)
  return <div>hats pages</div>;
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
