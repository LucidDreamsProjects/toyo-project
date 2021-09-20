import axios from "axios";

export async function mintToken(address, typeId, quantity) {
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTION_URL;
  const url = `${baseUrl}/template/token `;

  return await axios
    .post(url, {
      wallet: address,
      typeId: typeId,
      quantity: quantity,
    })
    .then((response) => {
      return response.data[0];
    })
    .catch(async (props, error) => {
      console.log(error);
    });
}
