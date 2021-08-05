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
import { Background, Section, Form, Row } from "./styles";
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

  //* Using web3 provider
  /* const startWeb3 = async () => {
    const options: ArkaneSubProviderOptions = {
      clientId: "Toyo-capsule",
      environment: "staging",
      windowMode: "POPUP" as WindowMode,
      bearerTokenProvider: () =>
        "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmQi1UenBOb0hBVGhwT2J4aW9qTDBrdm83MldmRzRXRXh1eFpiaXlGQUhzIn0.eyJleHAiOjE2MjgxNjgzNTMsImlhdCI6MTYyODE2ODA1MywianRpIjoiMjZkZjU5ZmQtMmUwMi00OTgzLTlmNmYtZjExMzQ5ODVjZjJmIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi1zdGFnaW5nLmFya2FuZS5uZXR3b3JrL2F1dGgvcmVhbG1zL0Fya2FuZSIsImF1ZCI6InJlYWxtLW1hbmFnZW1lbnQiLCJzdWIiOiJiYTlkZDg5NS02NDgxLTQ3OWEtYTJjMC04MDFiZWZmYmYyYWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJUb3lvLWNhcHN1bGUiLCJzZXNzaW9uX3N0YXRlIjoiYmFkYjQxNjYtYmU0Ny00MjRiLWE4NDgtYWExOGQ0MDAwZTM5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2JldGEuY2VudC5jbyJdLCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJxdWVyeS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19fSwic2NvcGUiOiJ2aWV3OndhbGxldHMgd2hpdGVsYWJlbCBtYXJrZXQ6YnV5OnNhbGUgZW1haWwgdXNlOmFsbC13YWxsZXRzIHNpZ246d2FsbGV0cyB2aWV3OnByb2ZpbGUgbWFya2V0OmNyZWF0ZTpzYWxlIHNhdmU6dHJhbnNhY3Rpb24gcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNjIuMTU4LjIyNC4xNzYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudElkIjoiVG95by1jYXBzdWxlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXRveW8tY2Fwc3VsZSIsImNsaWVudEFkZHJlc3MiOiIxNjIuMTU4LjIyNC4xNzYifQ.KCxGUge7A84QNluJoBQTqjFmjNBdeUibX9Is1IOdo5a-j9MokNYIHodhu53ArKI72kCtU_-VrzzK-KHaSIwMmmvmxMzhDUU66ezOiunXIVBQSJpyEWlKAsU0KrEtAAvuhMosBzaAZ6URhcXDCX9bQaj0zcyGMxOX3TA--rbjf30-7nhRLqtBJAn65MRy0yWAkV-AFYjqtjrlsMWzgaym4QMt4h1OgSl99N16MgJV5bqJ6f8T_0io0meMXcB9S0laGvTJ9YbSyjOwn1SfA_qsMG_GEnXPGV-KhweSGL8XjD-SmPs8bDULVWLypHfgKR0AamBL_kcLmTtOcrKsHeR15w",
      authenticationOptions: {
        idpHint: "google",
      },
      secretType: "MATIC" as SecretType,
      skipAuthentication: false,
    };

    return await Arkane.createArkaneProviderEngine(options).then((provider) => {
      const web3 = new Web3(provider);
    });
  };

  startWeb3();

  const venlyAuthenticatedUser = async () => {
    return await Arkane.arkaneConnect()!.flows.authenticate({
      redirectUri: "http://localhost:3000",
    });
  };

  venlyAuthenticatedUser(); */

  //* Using Venly's widget API
  /* const options: ConstructorOptions = {
    environment: "staging",
    windowMode: "POPUP" as WindowMode,
    bearerTokenProvider: () =>
      "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmQi1UenBOb0hBVGhwT2J4aW9qTDBrdm83MldmRzRXRXh1eFpiaXlGQUhzIn0.eyJleHAiOjE2MjgxNjkwNjcsImlhdCI6MTYyODE2ODc2NywianRpIjoiNmZlYTMwNjQtNDYzMi00MmRlLWFiNjQtOWM2NDFmOTYyMTg2IiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi1zdGFnaW5nLmFya2FuZS5uZXR3b3JrL2F1dGgvcmVhbG1zL0Fya2FuZSIsImF1ZCI6InJlYWxtLW1hbmFnZW1lbnQiLCJzdWIiOiJiYTlkZDg5NS02NDgxLTQ3OWEtYTJjMC04MDFiZWZmYmYyYWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJUb3lvLWNhcHN1bGUiLCJzZXNzaW9uX3N0YXRlIjoiM2FkOTA2Y2MtMGEyNC00NTE5LTg5MDItOWUzZmNmYjhlZTRiIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2JldGEuY2VudC5jbyJdLCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJxdWVyeS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19fSwic2NvcGUiOiJ2aWV3OndhbGxldHMgd2hpdGVsYWJlbCBtYXJrZXQ6YnV5OnNhbGUgZW1haWwgdXNlOmFsbC13YWxsZXRzIHNpZ246d2FsbGV0cyB2aWV3OnByb2ZpbGUgbWFya2V0OmNyZWF0ZTpzYWxlIHNhdmU6dHJhbnNhY3Rpb24gcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNjIuMTU4LjIyNC4xNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudElkIjoiVG95by1jYXBzdWxlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXRveW8tY2Fwc3VsZSIsImNsaWVudEFkZHJlc3MiOiIxNjIuMTU4LjIyNC4xNzgifQ.WJgF92LonRkQ6RnnyoHcLix_cH_pkO3Vu62bdLKHL0xalXIGB2ylgn7qjnrGsO05Z4AMDXv8n8trSEuK8Q8TXGYBrgfMZKTBdfdNFN15xL1Dy5eBosL-5Dtr_d5uDbynK4e3eBVB0xVxp4_l813C4F2HFuaJJga2ltwaAYBGgq7cbv0ZmQKa09wiFfCU2Gy5t5o_lTbQ-CXerZ4mEL6Ga3nHMwVu8im2OEz-gd6tqIMsoXz9eie51kb5cVNIyxCK0A7wfA_8GdBUziZjT676f5IsR4fJ2fwcmVoV98sQh8esfzU0-3FKDX7yy9AVVvriG-2gbf-5gXTJtQo2CcNHPA",
  };

  const arkaneConnect = new ArkaneConnect("Toyo-capsule", options);

  const getProfile = async () => {
    return await arkaneConnect.api.getProfile().then((profile) => {
      console.log(
        `Users email, ${profile.email}, oh damn I'm not working at all!`
      );
    });
  };
  
  getProfile();

  const venlyAuthenticatedUser = async () => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" as WindowMode })
      .then((result: AuthenticationResult) => {
        result
          .authenticated((auth: KeycloakInstance) => {
            alert("logged in: " + auth.subject);
          })
          .notAuthenticated((auth: KeycloakInstance) => {
            alert("not logged in");
          });
      });
  };

  venlyAuthenticatedUser(); */

  //* using Venly's Postman direct route
  /* axios
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
    }); */

  //* usign Auth0
  // axios.get("http://localhost:8080/authorize");

  return (
    <html>
      <body>
        <Background>
          <Section height="200%">
            <Row width="100%" height="auto">
              <div id="logo">DROPDOWN MENU</div>
              <button id="btn--home" onClick={() => {}}>
                LOGIN
              </button>
            </Row>
            <h1 id="title">Homepage 👽</h1>
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
          </Section>
        </Background>
      </body>
    </html>
  );
}
