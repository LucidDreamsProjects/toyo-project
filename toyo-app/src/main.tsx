import { render } from "preact";
import { useContext, useState } from "preact/hooks";
import { RouterContext, useRouter } from "./router";

import Home from "./views/home/home";
import NotFoundPage from "./views/404/notFoundPage";

import "./index.css";

function Content() {
  const { location } = useContext(RouterContext);

  switch (location.name) {
    case "home":
      return <Home />;

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
