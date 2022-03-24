import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.Fragment>
        <App
      titulo="Hola prop"
      edad={26}
      clicks={50}
        />
  </React.Fragment>,
  document.getElementById("root")
);
