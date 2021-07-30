import Web3 from "web3";
import { SecretType, WindowMode } from "@arkane-network/arkane-connect";
import {
  Arkane,
  ArkaneSubProviderOptions,
} from "@arkane-network/web3-arkane-provider";
import { Component } from "preact";
import styled from "styled-components";
import { JsonRpcPayload, JsonRpcResponse } from "web3-core-helpers";
import { RequestArguments } from "web3-core";
import { Provider } from "ethereum-types";

interface AbstractProvider extends Provider {
  sendAsync(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
  send?(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
  request?(args: RequestArguments): Promise<any>;
  connected?: boolean;
}

class Home extends Component {
  venlyInitialize() {
    const options: ArkaneSubProviderOptions = {
      clientId: "Arketype",
      environment: "staging",
      signMethod: "POPUP" as WindowMode,
      bearerTokenProvider: () => "",
      secretType: "MATIC" as SecretType,
      skipAuthentication: false,
    };

    Arkane.createArkaneProviderEngine(options).then(
      (provider: AbstractProvider) => {
        const web3 = new Web3(provider);
        console.log(web3);
      }
    );
  }

  componentDidMount() {
    this.venlyInitialize();
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
              <button
                id="btn--home"
                onClick={() => this.venlyLogin()}
                class="mr-1"
              >
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

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: hsl(261, 52%, 47%);
  color: #fff;
  font-size: 1.953rem;

  .space-between {
    justify-content: space-between;
  }

  .mr-1 {
    margin-right: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  div {
    padding: 1rem;
  }

  #logo {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    font-size: 0.8rem;
    text-shadow: 2px 2px 1px #000;
  }

  #btn--home {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    color: #fff;
    font-size: 0.8rem;
    text-shadow: 2px 2px 1px #000;
    background: none;
    border: none;
    cursor: pointer;
  }

  #title {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    top: 3rem;
    font-size: 2.441rem;
    text-shadow: 6px 6px 12px #000;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
`;

export default Home;
