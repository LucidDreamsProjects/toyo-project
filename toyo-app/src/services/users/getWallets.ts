import { ArkaneConnect, Wallet } from "@arkane-network/arkane-connect";

async function getWallets(
  arkaneConnect: ArkaneConnect
): Promise<void | Wallet[]> {
  const wallets = await arkaneConnect.api
    .getWallets()
    .then((wallets) => {
      console.log(`👷 User wallets: ${wallets}`);
      return wallets;
    })
    .catch((error) => {
      console.error(error);
    });

  return wallets;
}

export default getWallets;
