import { ArkaneConnect, SecretType } from "@arkane-network/arkane-connect";
import { NFT } from "@arkane-network/arkane-connect/dist/src/models/wallet/NFT";

export async function getNfts(
  arkaneConnect: ArkaneConnect,
  walletAddress: string
): Promise<void | NFT[]> {
  const secretType = "MATIC" as SecretType;

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
