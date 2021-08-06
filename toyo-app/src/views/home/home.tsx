import {
  ArkaneConnect,
  SecretType,
  WindowMode,
} from "@arkane-network/arkane-connect";
import {
  AuthenticationResult,
  ConstructorOptions,
} from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { useEffect, useState } from "preact/hooks";
import { KeycloakInstance } from "keycloak-js";
import { Background, Section, Row, Form, ApiButtons } from "./styles";
import axios from "axios";
import qs from "qs";
import {
  Arkane,
  ArkaneSubProviderOptions,
} from "@arkane-network/web3-arkane-provider";
import Web3 from "web3";

export default function Home() {
  let [isLogged, Login] = useState(false);
  let [playerUI, setPlayerUI] = useState(1);

  const _bearerToken = () => {
    return "";
  };

  //* Using Arkane wrapper on Web3 Instance
  const connectWeb3 = async () => {
    const options: ArkaneSubProviderOptions = {
      clientId: "Toyo-capsule",
      environment: "staging",
      windowMode: "POPUP" as WindowMode,
      bearerTokenProvider: _bearerToken,
      authenticationOptions: {
        idpHint: "google",
      },
      secretType: "MATIC" as SecretType,
      skipAuthentication: false,
    };

    await Arkane.createArkaneProviderEngine(options).then((provider) => {
      const web3 = new Web3(provider);

      web3.eth.getAccounts((err, accounts) => {
        console.log("Calling getAccounts method trought web3 instance...");
        if (err) throw err;
        console.log(accounts);
      });
    });

    await Arkane.arkaneConnect()!
      .flows.authenticate({
        redirectUri: "http://localhost:3000",
      })
      .then((result) => console.log(result))
      .catch((reason) => console.log(reason));
  };

  //* Using Venly's widget API directly
  const connectWidgetAPI = async () => {
    const options: ConstructorOptions = {
      environment: "staging",
      windowMode: "POPUP" as WindowMode,
      bearerTokenProvider: _bearerToken,
    };

    const arkaneConnect = new ArkaneConnect("Toyo-capsule", options);

    await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" as WindowMode })
      .then((result: AuthenticationResult) => {
        result
          .authenticated((auth: KeycloakInstance) => {
            alert("logged in: " + auth.subject);
          })
          .notAuthenticated((auth: KeycloakInstance | undefined) => {
            alert("not logged in");
          });
      });

    await arkaneConnect.api.getProfile().then((profile) => {
      console.log(
        `Users email, ${profile.email}, oh damn I'm not working at all!`
      );
    });
  };

  //* using Venly's Postman's Collection route directly
  const connectPostman = async () => {
    await axios
      .post(
        "https://login-staging.arkane.network/auth/realms/Arkane/protocol/openid-connect/token",
        qs.stringify({
          grant_type: "client_credentials",
          client_id: "Toyo-capsule",
          client_secret: "11ea7787-d9a1-421a-bdd8-1d6563442343",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      });
  };

  const connectPostmanTOApi = async () => {
    await axios
      .get("http://localhost:8080/authorize/postman")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const connecWidgetAPITOApi = async () => {
    await axios
      .get("http://localhost:8080/authorize/widget")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <html>
      <body>
        <Background>
          <Section height="200%">
            <Row width="100%" height="auto">
              <div id="logo">DROPDOWN MENU</div>
              <button class="btn btn--home" onClick={() => {}}>
                LOGIN
              </button>
            </Row>
            <h1 id="title">Homepage 👽</h1>
            <Row>
              <Form action="" method="post">
                <div>
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" />
                </div>
                <div>
                  <label htmlFor="firstName">Name</label>
                  <input id="firstName" type="text" />
                </div>
                <div>
                  <label htmlFor="lastName">Surname</label>
                  <input id="lastName" type="text" />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input id="address" type="text" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="text" />
                </div>
                <div>
                  <label htmlFor="icon">Icon</label>
                  <input id="icon" type="number" />
                </div>
              </Form>
              <ApiButtons>
                <button class="btn btn--api " onClick={connectWeb3}>
                  CONNECT WEB3
                </button>
                <button class="btn btn--api " onClick={connectWidgetAPI}>
                  CONNECT WIDGET API
                </button>
                <button class="btn btn--api " onClick={connectPostman}>
                  CONNECT POSTMAN
                </button>
                <button class="btn btn--api " onClick={connectPostmanTOApi}>
                  CONNECT POSTMAN TROUGH OUR API
                </button>
                <button
                  class="btn btn--api mt-2-25"
                  onClick={connecWidgetAPITOApi}
                >
                  CONNECT WIDGET API TROUGH OUR API
                </button>
              </ApiButtons>
            </Row>
          </Section>
        </Background>
      </body>
    </html>
  );
}
