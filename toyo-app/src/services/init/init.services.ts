import { ArkaneConnect, WindowMode } from "@arkane-network/arkane-connect";
import {
  AuthenticationResult,
  ConstructorOptions,
} from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { KeycloakInstance } from "keycloak-js";
import useBearerToken from "../../hooks/useBearerToken";

// let _bearerToken = useBearerToken();
let _bearerToken = () => "";

//* Using Venly's widget API directly
async function ConnectWidgetAPI() {
  const options: ConstructorOptions = {
    environment: "staging",
    windowMode: "POPUP" as WindowMode,
    bearerTokenProvider: _bearerToken,
  };

  const arkaneConnect = new ArkaneConnect("Toyo", options);

  return arkaneConnect;
}

export default ConnectWidgetAPI;
