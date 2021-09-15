import axios from "axios";

export async function getWalletById(walletId) {
  const baseUrl = process.env.REACT_APP_BASE_STAGING_URL;
  const url = `${baseUrl}/wallet/` + walletId;

  console.log(url);

  return await axios
    .get(url)
    .then((response) => {
      console.log(
        "👷 Preparing your wallet to mint new Toyos...",
        response.data
      );
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
