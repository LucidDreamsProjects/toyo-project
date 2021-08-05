import { WindowMode } from "@arkane-network/arkane-connect";
import {
  ArkaneConnect,
  AuthenticationResult,
} from "@arkane-network/arkane-connect/dist/src/connect/connect";
import axios from "axios";
import qs from "qs";

/* const bearerTokenProvider = async (): Promise<string> => {
  axios
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

  return "dada";
}; */

/* const getAuthenticatedUser = async (
  arkaneConnect: ArkaneConnect
): Promise<void | AuthenticationResult> => {
  const result = await arkaneConnect
    .authenticate({
      windowMode: "POPUP" as WindowMode,
    })
    .catch((reason) => {
      console.debug(reason);
    });

  return result;
};

const checkIfAuthenticatedUser = async (
  arkaneConnect: ArkaneConnect
): Promise<void | AuthenticationResult> => {
  const result = await arkaneConnect
    .checkAuthenticated()
    .then((result) => {
      console.log(result);
    })
    .catch((reason) => {
      console.log(reason);
    });

  return result;
}; */

export { getAuthenticatedUser, checkIfAuthenticatedUser };
