import Web3 from "web3";
import { SecretType, WindowMode } from "@arkane-network/arkane-connect";
import {
  Arkane,
  ArkaneSubProviderOptions,
} from "@arkane-network/web3-arkane-provider";
import venlyLogin from "../auth/auth.services";

export default function venlyInitialize() {
  const options: ArkaneSubProviderOptions = {
    clientId: "Arketype",
    environment: "staging",
    signMethod: "POPUP" as WindowMode,
    bearerTokenProvider: () => "",
    secretType: "MATIC" as SecretType,
    skipAuthentication: false,
  };

  Arkane.createArkaneProviderEngine(options).then((provider) => {
    const web3 = new Web3(provider);
  });

  Arkane.checkAuthenticated().then((result) => {
    console.log("result " + result);
    result.authenticated((auth) => {
      console.log("auth " + auth);
      alert("logged in " + auth.subject);
    });

    result.notAuthenticated((auth) => {
      console.log("auth " + auth);
      alert("not logged in");
      venlyLogin();
    });
  });
}
