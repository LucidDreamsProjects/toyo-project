import axios from "axios";

export async function mintNft(typeId: number, walletAddress: string[]) {
  const url = `http://localhost:8080/nft/mint`;

  axios
    .post(url, {
      typeId: typeId,
      destinations: walletAddress,
    })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
}
