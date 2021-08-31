export async function getNfts(arkaneConnect, walletAddress) {
  const secretType = "MATIC";

  const nfts = await arkaneConnect.api
    .getNonfungiblesByAddress(secretType, walletAddress)
    .then((nfts) => {
      console.log(`👷 Your NFTs: ${JSON.stringify(nfts)}`);
      return nfts;
    })
    .catch((error) => {
      console.error(error);
    });

  return nfts;
}
