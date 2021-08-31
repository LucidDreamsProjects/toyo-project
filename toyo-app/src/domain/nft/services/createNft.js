import axios from "axios";

export async function createNft(nft) {
  const url = "http://localhost:8080/nft/create";

  return await axios.post(url, nft);
}
