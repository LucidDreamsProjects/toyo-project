import { ArkaneConnect, Wallet } from "@arkane-network/arkane-connect";

export async function getWallets(
  arkaneConnect: ArkaneConnect
): Promise<void | Wallet[]> {
  const wallets = await arkaneConnect.api
    .getWallets()
    .then((wallet) => {
      console.log(`👷 User wallets: ${wallet}`);
      return wallet;
    })
    .catch((error) => {
      console.error(error);
    });

  return wallets;
}
