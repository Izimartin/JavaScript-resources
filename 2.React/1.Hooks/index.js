import React from "react";
import ReactDOM from "react-dom";

// import { LandingPage } from "./pages/landing.page";
// import { FiveCounter } from "./pages/fiveCounter.jsx";
// import { Map } from "./pages/map";
// import { FetchAPI } from "./pages/fetch";
// import { FormikForms } from "./pages/formik";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        {/* <Route exact path="/5counter" component={FiveCounter} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/fetchapi" component={FetchAPI} />
        <Route exact path="/forms-formik" component={FormikForms} /> */}

        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
