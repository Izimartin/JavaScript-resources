import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initStore from "./store/index";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function render(Component) {
  ReactDOM.render(
    <Provider store={initStore}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
}

render(App);
