import { render } from "preact";
import { useContext, useRef } from "preact/hooks";
import { RouterContext, useRouter } from "./router";
import "./index.css";

import Home from "./views/home/home";
import NotFoundPage from "./views/404/notFoundPage";

function Content() {
  const { location } = useContext(RouterContext);

  switch (location.name) {
    case "home":
      return <Home name={""} age={0} timer={0} />;

    /* case "example": {
      const { exampleId } = location.params;
      return <ExamplePage postId={exampleId} />;
    } */

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
