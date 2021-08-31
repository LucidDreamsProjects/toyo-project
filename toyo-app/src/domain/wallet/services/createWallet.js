import axios from "axios";

export async function createWallet() {
  const pincode = 7548;
  const url = "http://localhost:8080/wallet/create";

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
