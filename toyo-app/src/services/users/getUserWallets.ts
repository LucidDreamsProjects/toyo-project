import { ArkaneConnect, Wallet } from "@arkane-network/arkane-connect";

const getUserWallets = async (arkaneConnect: ArkaneConnect): Promise<void | Wallet[]> => {
  const wallets = await arkaneConnect.api
    .getWallets()
    .then((wallets) => {
      console.log(wallets);
      return wallets;
    })
    .catch((error) => {
      console.error(error);
    });

  return wallets;
};