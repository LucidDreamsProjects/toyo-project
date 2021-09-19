import axios from "axios";

export async function createWallet() {
  const pincode = 7548;
  const url = "http://162.240.6.22:8080/wallet/create";

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
