import axios from "axios";

export async function createWallet() {
  const pincode = 7548;
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTION_URL;
  const url = `${baseUrl}/wallet/create`;

  const wallet = await axios({
    method: "post",
    url: url,
    data: {
      pincode: pincode,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return wallet;
}
