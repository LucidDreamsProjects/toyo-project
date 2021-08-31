export async function getWallets(arkaneConnect) {
  const wallets = await arkaneConnect.api
    .getWallets()
    .then((wallets) => {
      console.log(`👷 your wallets: `, wallets);
      return wallets;
    })
    .catch((error) => {
      console.error(error);
    });

  return wallets;
}
