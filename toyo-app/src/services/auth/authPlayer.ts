import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";
import { AuthenticationResult } from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { KeycloakInstance } from "keycloak-js";

export async function authPlayer(arkaneConnect: ArkaneConnect): Promise<void> {
  return await arkaneConnect.flows
    .authenticate({ windowMode: "POPUP" as WindowMode })
    .then((result: AuthenticationResult) => {
      result.authenticated((auth: KeycloakInstance) => {
        console.log("👷 User logged in: ", auth);
      });

      result.notAuthenticated((auth: undefined | KeycloakInstance) => {
        console.log("👷 User couldn't be logged in");
      });
    });
}
