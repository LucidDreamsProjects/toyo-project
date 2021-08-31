import { render } from "preact";
import { useContext } from "preact/hooks";
import { RouterContext, useRouter } from "./router";
// import { ArkaneConnect } from "@arkane-network/arkane-connect";

import { Home } from "./views/home/home";
import { SecretPanel } from "./views/secretPanel/secretPanel";
import { FunctionReferences } from "./views/functionReferences/functionReferences";
import NotFoundPage from "./views/404/notFoundPage";

import "./index.css";

function Content() {
  const { location } = useContext(RouterContext);

  const options = {
    environment: "staging",
    windowMode: "POPUP",
  };

  // const arkaneConnect = new ArkaneConnect("Toyo", options);

  switch (location.name) {
    case "home":
      return <Home />;
    // return <Home arkaneConnect={arkaneConnect} />;

    case "secret-panel":
      return <SecretPanel />;
    // return <SecretPanel arkaneConnect={arkaneConnect} />;

    case "function-references":
      return <FunctionReferences />;

    case "404":
    default:
      return <NotFoundPage />;
  }
}

export default function UI() {
  const router = useRouter(location.href);

  return (
    <RouterContext.Provider value={router}>
      <Content />
    </RouterContext.Provider>
  );
}

render(<UI />, document.getElementById("app"));
