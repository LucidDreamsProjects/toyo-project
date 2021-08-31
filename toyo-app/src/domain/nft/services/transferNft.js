export async function transferNft(
  arkaneConnect,
  fromId,
  toId,
  tokenAddress,
  tokenId
) {
  const secretType = "MATIC";

  const signer = arkaneConnect.createSigner();

  signer
    .executeNftTransfer({
      walletId: fromId,
      to: toId,
      tokenAddress: tokenAddress,
      tokenId: tokenId,
      secretType: secretType,
    })
    .then((signerResult) => {
      if (signerResult.status === "SUCCESS") {
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
}
