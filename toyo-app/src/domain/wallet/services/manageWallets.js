export const manageWallets = async (arkaneConnect) => {
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
