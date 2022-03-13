import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { AmazonApp } from "./AmazonApp";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <AmazonApp />
  </Provider>,
  document.getElementById("root")
);
