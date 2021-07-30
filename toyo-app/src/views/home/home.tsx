import { Component } from "preact";
import { Background, Row } from "./styles";

import venlyInitialize from "../../services/start/init.services";
import venlyLogin from "../../services/auth/auth.services";

class Home extends Component {
  componentDidMount() {
    venlyInitialize();
  }

  componentWillUnMount() {}

  render() {
    return (
      <html>
        <head>
          <script src="/node_modules/@arkane-network/web3-arkane-provider/dist/web3-arkane-provider.js" />
          <meta charSet="utf-8" />
          <title>Toyo | Home</title>
        </head>
        <body>
          <Background>
            <Row width="100%" height="auto" class="space-between">
              <div id="logo">Toyo Game</div>
              <button id="btn--home" onClick={() => venlyLogin()} class="mr-1">
                LOGIN
              </button>
            </Row>
            <h1 id="title">Homepage 👽</h1>
          </Background>
        </body>
      </html>
    );
  }
}

export default Home;
