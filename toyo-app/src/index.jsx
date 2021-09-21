import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ArkaneConnect } from "@arkane-network/arkane-connect";
import { Home } from "./views/home/home";
import { FunctionReferences } from "./views/functionReferences/functionReferences";
import { NoMatch } from "./views/noMatch/noMatch";
import { StressPanel } from "./views/stressPanel/stressPanel";
import { AlternativePanel } from "./views/alternativePanel/alternativePanel";

import "./index.css";

const App = () => {
  const clientId = process.env.REACT_APP_VENLY_ID;
  const options = {
    environment: "staging",
    windowMode: "POPUP",
  };

  const arkaneConnect = new ArkaneConnect("Toyo", options);

  return (
    <Switch>
      <Route
        path="/"
        component={() => {
          window.location.href = "https://toyofight.io";
          return null;
        }}
      />
      <Route path="/ui-staging">
        <Home />
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
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
