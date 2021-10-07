import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home/home";
import { Mint } from "./views/mint/mint";
import { Admin } from "./views/admin/admin";
import { NoMatch } from "./views/noMatch/noMatch";
import { WebGLPanel } from "./views/webGLPanel/webGLPanel";

import "./index.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            window.location.href = "https://toyofight.io";
            return null;
          }}
        />
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route path="/home-staging">
          <Home />
        </Route>
        <Route path="/mint-staging">
          <Mint />
        </Route>
        <Route path="/admin-staging">
          <Admin />
        </Route>
        <Route path="/webgl-staging">
          <WebGLPanel />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
