import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { KeycloakInstance } from "keycloak-js";

async function getAuth(arkaneConnect: ArkaneConnect) {
  await arkaneConnect.flows
    .authenticate({ windowMode: "POPUP" as WindowMode })
    .then((result: AuthenticationResult) => {
      result
        .authenticated((auth: KeycloakInstance) => {
          // returns User Id. check https://docs.venly.io/widget/widget-advanced/object-type-reference/keycloakinstance for more info
          console.log(`👷 User id: ${auth.subject}`);
          return auth.subject;
        })
        .notAuthenticated((auth: KeycloakInstance | undefined) => {
          console.debug("👷 User couldn't be logged. Sorry. " + auth);
        });
    });
}

export default getAuth;
