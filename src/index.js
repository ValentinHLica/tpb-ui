import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/main.css";

window.api_url = "https://tpb-api.herokuapp.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
