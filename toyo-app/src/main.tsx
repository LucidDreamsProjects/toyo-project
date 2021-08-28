import { render } from "preact";
import { useContext } from "preact/hooks";
import { RouterContext, useRouter } from "./router";
import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";

import { Home } from "./views/home/home";
import NotFoundPage from "./views/404/notFoundPage";

import "./index.css";
import { ConstructorOptions } from "@arkane-network/arkane-connect/dist/src/connect/connect";

function Content() {
  const { location } = useContext(RouterContext);

  const options: ConstructorOptions = {
    environment: "staging",
    windowMode: "POPUP" as WindowMode,
  };

  const arkaneConnect = new ArkaneConnect("Toyo", options);

  switch (location.name) {
    case "home":
      return <Home arkaneConnect={arkaneConnect} />;
<<<<<<< Updated upstream
=======

    case "secret-panel":
      return <SecretPanel arkaneConnect={arkaneConnect} />;
>>>>>>> Stashed changes

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

render(<UI />, document.getElementById("app")!);
