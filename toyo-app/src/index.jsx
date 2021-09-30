import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ArkaneConnect } from "@arkane-network/arkane-connect";
import { Home } from "./views/home/home";
import { FunctionReferences } from "./views/functionReferences/functionReferences";
import { NoMatch } from "./views/noMatch/noMatch";
import { StressPanel } from "./views/stressPanel/stressPanel";
import { AlternativePanel } from "./views/alternativePanel/alternativePanel";
import { WebGLPanel } from "./views/webGLPanel/webGLPanel";

import "./index.css";

const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const App = () => {
  const [auth, isAuth] = useState(false);
  const [player, setPlayer] = useState({});
  const clientId = process.env.REACT_APP_VENLY_ID;
  const options = {
    environment: "staging",
    windowMode: "POPUP",
  };

  const arkaneConnect = new ArkaneConnect("Toyo", options);

  // console.log(arkaneConnect);

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
        <Route path="/ui-staging">
          <Home />
        </Route>
        <Route path="/webgl-staging">
          <WebGLPanel />
        </Route>
        <Route path="/alternative-panel">
          <AlternativePanel arkaneConnect={arkaneConnect} />
        </Route>
        <Route path="/stress-panel">
          <StressPanel arkaneConnect={arkaneConnect} />
        </Route>
        <Route path="/references">
          <FunctionReferences />
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
