import { useState } from "preact/hooks";
import axios from "axios";

import { config } from "dotenv";

config();

export function FunctionReferences() {
  let [wallet, setWallet] = useState("");
  const DATA_URL = `https://api-staging.arkane.network/api/wallets/`;
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

    setWallet(wallets[0].address);

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

  const connectWallet = async () => {
    console.log("a");
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await ethereum.request({
          method: "eth_requestAccounts",
        }); //connect Metamask
        console.log(address);
        setWallet(address);
        return obj;
      } catch (error) {
        return {
          connectedStatus: false,
          status: "🦊 Connect to Metamask using the button on the top right.",
        };
      }
    } else {
      return {
        connectedStatus: false,
        status:
          "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      };
    }
  };

  const mintNft = async (typeId, [wallet]) => {
    const url = "http://localhost:8080/nft/mint";

    axios
      .post(url, {
        typeId: typeId,
        destinations: [wallet],
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const sendTransaction = async () => {
    console.log("called metamask send transaction");

    const transactionParameters = {
      // nonce: "0x00", // ignored by MetaMask
      // gasPrice: "0x09184e72a000", // customizable by user during MetaMask confirmation.
      // gas: "0x2710", // customizable by user during MetaMask confirmation.
      to: "0x8dB402e86Bc94bD1F15Ab00E7D89b94ADd493c64", // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: "0x00", // Only required to send ether to the recipient from the initiating external account.
      // data: "0x7f7465737432000000000000000000000000000000000000000000000000000000600057", // Optional, but used for defining smart contract creation and interaction.
      chainId: "137", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };

    console.log(transactionParameters);

    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
  };

  const getNfts = async (wallet) => {
    const secretType = "MATIC";

    // await authPlayer();

    // await getWallets();

    const nfts = await arkaneConnect.api
      .getNonfungiblesByAddress(secretType, wallet)
      .then((nfts) => {
        console.log(`👷 Your NFTs: ${JSON.stringify(nfts)}`);
        return nfts;
      })
      .catch((error) => {
        console.error(error);
      });

    return nfts;
  };

  // const transferNft = async (fromId, toId, tokenAddress, tokenId)
  const transferNft = async (playerWallet) => {
    const adminWallet = "877de31c-7be0-4e0c-9d80-4af218bad84e";

    console.log(playerWallet);
    const tokenAddress = "0xb848df629b89cb8a11cbe83754f8455d2d4f5e6d";
    const tokenId = "52";

    const signer = arkaneConnect.createSigner("POPUP");

    const obj = {
      walletId: adminWallet,
      to: playerWallet,
      tokenAddress: tokenAddress,
      tokenId: tokenId,
      secretType: "MATIC",
      value: "0",
    };

    console.log(obj);

    signer
      .executeNftTransfer(obj)
      .then((signerResult) => {
        if (signerResult.status === "SUCCESS") {
          console.log(signerResult);
          console.log(signerResult.result);
          console.log(
            `Transaction ${signerResult.result.transactionHash} has been successfully executed!`
          );
        } else {
          console.warn(`Something went wrong while executing the transaction`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <html>
      <body>
        <div>FUNCTION REFERENCES</div>
        <button onClick={() => authPlayer()}>AUTH PLAYER</button>
        <button onClick={() => getWallets()}>GET WALLETS</button>
        <button onClick={() => getAccount()}>GET ACCOUNT</button>
        <button onClick={() => manageWallets()}>MANAGE WALLETS</button>
        <button onClick={() => connectWallet()}>CONNECT METAMASK</button>
        <button onClick={() => mintNft(1, [wallet])}>MINT NFT</button>
        <button onClick={() => getNfts(wallet)}>GET NFTs</button>
        <button onClick={() => transferNft(wallet)}>
          TRANSFER NFTs (must use from secondary account)
        </button>
        <button onClick={() => sendTransaction()}>
          TRANSFER NFTs TROUGH METAMASK (must use from secondary account)
        </button>
      </body>
    </html>
  );
}
