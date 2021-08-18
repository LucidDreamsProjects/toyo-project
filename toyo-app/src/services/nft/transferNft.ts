import {
  ArkaneConnect,
  SecretType,
  SignerResult,
} from "@arkane-network/arkane-connect";

export async function transferNft(arkaneConnect: ArkaneConnect): Promise<void> {
  const secretType = "MATIC" as SecretType;
  const playerWalletId = "d349315c-f4fe-435f-88f3-76fd0a06d4de";
  const adminWalletAddress = "0xb03466dFC417f4163fcae65CA220a2D074b5e1e9";
  const tokenAddress = "0x8a380eea07ca3f901ca5c6f777ba6e9165d01ab2";
  const tokenId = "1";

  const signer = arkaneConnect.createSigner();

  signer
    .executeNftTransfer({
      walletId: playerWalletId,
      to: adminWalletAddress,
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
