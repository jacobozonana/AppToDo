import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./Components/Routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  rootElement
);
