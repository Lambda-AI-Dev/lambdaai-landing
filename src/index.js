import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Home";
import Dashboard from "./Dashboard";
import HttpsRedirect from "react-https-redirect";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <HttpsRedirect>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route
          path="/demo"
          exact
          render={() => {
            window.location.href = "/demo/index.html";
          }}
        />
      </Switch>
    </BrowserRouter>
  </HttpsRedirect>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
