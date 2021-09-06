import axios from "axios";

export async function transferNft(arkaneConnect, dto, walletId) {
  let i = 0;
  let nft = {};
  const secretType = "MATIC";

  const signer = arkaneConnect.createSigner();

  signer
    .executeNftTransfer(dto)
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
