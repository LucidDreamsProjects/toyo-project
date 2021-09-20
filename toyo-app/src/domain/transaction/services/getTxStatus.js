import axios from "axios";

export async function getTxStatus(secretType, transactionHash) {
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTION_URL;
  const url = `${baseUrl}/transactions/${secretType}/${transactionHash}/status`;

  return await axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
