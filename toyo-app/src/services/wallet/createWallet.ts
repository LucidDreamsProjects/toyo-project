import { ArkaneConnect, Wallet } from "@arkane-network/arkane-connect";
import axios from "axios";

export async function createWallet(
  arkaneConnect: ArkaneConnect
): Promise<void | Wallet> {
  const pincode = 1234;
  const url = "http://localhost:8080/wallet/create";

  const wallet = axios
    .post(url, {
      pincode: pincode,
    })
    .then((wallet) => {
      console.log("wallet created: " + wallet);
      return wallet.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return wallet;
}
