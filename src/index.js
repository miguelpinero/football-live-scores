import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/pages/Home";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
