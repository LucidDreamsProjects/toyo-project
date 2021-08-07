import {
  ArkaneConnect,
  WindowMode,
} from "@arkane-network/arkane-connect";

const _bearerToken = () => {
    return "";
  };

//* Using Venly's widget API directly
async function ConnectWidgetAPI() {
    const options: ConstructorOptions = {
      environment: "staging",
      windowMode: "POPUP" as WindowMode,
      bearerTokenProvider: _bearerToken,
    };

    const arkaneConnect = new ArkaneConnect("Toyo", options);

    await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" as WindowMode })
      .then((result: AuthenticationResult) => {
        result
          .authenticated((auth: KeycloakInstance) => {
            // returns User Id. check https://docs.venly.io/widget/widget-advanced/object-type-reference/keycloakinstance for more info
            return auth.subject;
          })
          .notAuthenticated((auth: KeycloakInstance | undefined) => {
            console.debug("👷 User couldn't be logged. Sorry. " + auth);
          });
      });

    await arkaneConnect.api
      .getProfile()
      .then((profile) => {
        console.log(profile);
      })
      .catch((reason) => {
        console.debug(reason);
      });
  };

export default ConnectWidgetAPI;