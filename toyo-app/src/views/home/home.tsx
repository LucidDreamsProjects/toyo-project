import { useEffect, useState } from "preact/hooks";
import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";

import useWindowSize from "../../hooks/useWindowSize";

import { FunctionalComponent } from "preact";
import { KeycloakInstance } from "keycloak-js";
import { Background, Section, Form, NeonButton } from "./styles";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";

interface HomeProps {
  arkaneConnect: ArkaneConnect;
}

export const Home: FunctionalComponent<HomeProps> = (props): JSX.Element => {
  let [width, height] = useWindowSize();
  let [isLogged, setIsLogged] = useState(false);
  let [playerUI, setPlayerUI] = useState(1);
  let userId;
  let profile;

  async function handleInit() {
    console.log(`👷 Welcome to Toyo's official webpage!`);
    console.log(`👷 User is logged? ${isLogged}`);

    if (props.arkaneConnect !== undefined) {
      console.log(`👷 Device online and ready to go!`);
    }

    handleAuthCheck();
  }

  async function handleAuthCheck() {
    if (isLogged) {
      let result = await props.arkaneConnect
        .checkAuthenticated()
        .catch((error) => console.log(error));

      if (result) {
        setIsLogged(result.isAuthenticated);
      }
    }

    if (isLogged === false) {
      console.log(`👷 Checking user credentials...`);

      let result: void | AuthenticationResult = await props.arkaneConnect.flows
        .authenticate({ windowMode: "POPUP" as WindowMode })
        .then((result: AuthenticationResult) => {
          result.authenticated((auth: KeycloakInstance) => {
            console.log("👷 User logged in: " + auth.subject);
          });
          result.notAuthenticated((auth: undefined | KeycloakInstance) => {
            console.log("👷 User not logged in");
          });
        });

      if (result) {
        setIsLogged(result.isAuthenticated);
      }
    }
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <html>
      <body>
        <Background>
          <Section height={height}>
            <div id="logo">DROPDOWN MENU</div>
            <h1 id="title">Homepage 👽</h1>
            <NeonButton class="btn--login" onClick={handleInit}>
              LOGIN
            </NeonButton>
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
};
