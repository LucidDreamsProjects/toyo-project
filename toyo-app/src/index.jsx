import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

  // console.log(arkaneConnect);

  return (
    <Switch>
      <Route exact path="/">
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
