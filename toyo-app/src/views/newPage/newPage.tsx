import axios from "axios";
import ethers from "ethers";
import {
  ArkaneConnect,
  PopupResult,
  SecretType,
  Wallet,
  WindowMode,
} from "@arkane-network/arkane-connect";
import { FunctionalComponent } from "preact";
import { KeycloakInstance } from "keycloak-js";
import {
  AuthenticationResult,
  ConstructorOptions,
} from "@arkane-network/arkane-connect/dist/src/connect/connect";
import { Account } from "@arkane-network/arkane-connect/dist/src/models/Account";

export const NewPage: FunctionalComponent = (): JSX.Element => {
  const DATA_URL = `${process.env.WALLET_API_ENDPOINT}/api/wallets/`;
  const playerId = "2f8231ca-8a79-43c9-bf21-ac8702a4e1c7";

  const options: ConstructorOptions = {
    environment: "staging",
    windowMode: "POPUP" as WindowMode,
  };

  const arkaneConnect = new ArkaneConnect("Toyo", options);

  const authPlayer = async (): Promise<void> => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" as WindowMode })
      .then((result: AuthenticationResult) => {
        result
          .authenticated((auth: KeycloakInstance) => {
            console.log("logged in: " + auth.subject);
            return auth.subject;
          })
          .notAuthenticated((auth: undefined | KeycloakInstance) => {
            console.log("not logged in");
          });
      });
  };

  const getWalletById = async (walletId: string): Promise<Wallet[] | void> => {
    const url = DATA_URL + walletId;

    const wallet = await axios
      .post(url)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return wallet;
  };

  const getWallets = async (): Promise<Wallet[] | undefined> => {
    const wallets = await arkaneConnect.api
      .getWallets()
      .then((wallets) => {
        console.log(wallets);
        return wallets;
      })
      .catch((err) => {
        console.log(err);
      });

    if (wallets) {
      return wallets;
    }
  };

  const getAccount = async (): Promise<Account | void> => {
    const account = await arkaneConnect.flows
      .getAccount("MATIC" as SecretType)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return account;
  };

  const manageWallets = async (): Promise<PopupResult | void> => {
    const wallets = await arkaneConnect.flows
      .manageWallets("MATIC" as SecretType)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return wallets;
  };

  const linkWallets = async (): Promise<PopupResult | void> => {
    const wallets = await arkaneConnect.flows
      .linkWallets()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return wallets;
  };

  const checkIfMetamask = async (): Promise<void> => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    }
  };

  const getEthers = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
  };

  return (
    <html>
      <body>
        <div>FUNCTION REFERENCES</div>
        <button onClick={() => authPlayer()}>AUTH PLAYER</button>
        <button onClick={() => getWallets()}>GET WALLETS</button>
        <button onClick={() => getWalletById(playerId)}>
          GET WALLET FROM ID
        </button>
        <button onClick={() => getAccount()}>GET ACCOUNT</button>
        <button onClick={() => manageWallets()}>MANAGE WALLETS</button>
        <button onClick={() => linkWallets()}>LINK WALLETS</button>
        {/* <button onClick={() => getEthers()}>GET WEB3</button> */}
      </body>
    </html>
  );
};
