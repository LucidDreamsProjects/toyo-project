import { Wallet } from "@arkane-network/arkane-connect";
import axios from "axios";

export async function getWalletsFromServer(): Promise<Wallet[] | undefined> {
  const url = "http://localhost:8080/wallet/all";

  const wallets = await axios({
    method: "get",
    url: url,
  })
    .then((response) => {
      console.log("your wallets from server: ", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return wallets;
}
