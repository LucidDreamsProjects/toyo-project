import axios from "axios";
import ethers from "ethers";

import { config } from "dotenv";

config();

export function FunctionReferences() {
  const DATA_URL = `https://api-staging.arkane.network/api/wallets/`;
  const playerId = "2f8231ca-8a79-43c9-bf21-ac8702a4e1c7";
  const options = {
    environment: "staging",
    windowMode: "POPUP",
  };

  const arkaneConnect = new ArkaneConnect("Toyo", options);

  const authPlayer = async () => {
    return await arkaneConnect.flows
      .authenticate({ windowMode: "POPUP" })
      .then((result) => {
        result
          .authenticated((auth) => {
            console.log("logged in: " + auth.subject);
            return auth.subject;
          })
          .notAuthenticated((auth) => {
            console.log("not logged in");
          });
      });
  };

  const getWalletById = async (walletId) => {
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

  const getWallets = async () => {
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

  const getAccount = async () => {
    const account = await arkaneConnect.flows
      .getAccount("MATIC")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return account;
  };

  const manageWallets = async () => {
    const wallets = await arkaneConnect.flows
      .manageWallets("MATIC")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return wallets;
  };

  const linkWallets = async () => {
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

  const checkIfMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    }
  };

  const getEthers = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    const signer = provider.getSigner();
    console.log(signer);
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
        <button onClick={() => getEthers()}>GET WEB3</button>
        <button onClick={() => checkIfMetamask()}>
          CHECK IF METAMASK SUPPORT
        </button>
        <button onClick={() => getEthers()}>GET ETHERS</button>
      </body>
    </html>
  );
}
