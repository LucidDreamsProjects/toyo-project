import {
  ArkaneConnect,
  SecretType,
  SignerResult,
} from "@arkane-network/arkane-connect";

export async function transferNft(
  arkaneConnect: ArkaneConnect,
  fromId: string,
  toId: string,
  tokenAddress: string,
  tokenId: string
): Promise<void> {
  const secretType = "MATIC" as SecretType;

  const signer = arkaneConnect.createSigner();

  signer
    .executeNftTransfer({
      walletId: fromId,
      to: toId,
      tokenAddress: tokenAddress,
      tokenId: tokenId,
      secretType: secretType,
    })
    .then((signerResult: SignerResult) => {
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
