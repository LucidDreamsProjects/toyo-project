import Web3 from "web3";
import { SecretType } from "@arkane-network/arkane-connect";
import {
  Arkane,
  ArkaneSubProviderOptions,
} from "@arkane-network/web3-arkane-provider";
import { config } from "dotenv";

config();

/* export default async function venlyInit(): Promise<void> {
  const options: ArkaneSubProviderOptions = {
    clientId: "Toyo-capsule",
    environment: "staging",
    secretType: "MATIC" as SecretType,
    skipAuthentication: false,
  };

  await Arkane.createArkaneProviderEngine(options)
    .then((provider) => {
      const web3 = new Web3(provider);
    })
    .catch((reason) => {
      console.log(reason);
    });
} */
