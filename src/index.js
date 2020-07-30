import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/main.css";

window.api_url = "https://portfolio-server-vl.herokuapp.com/tpb/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
