import axios from "axios";

export async function mintNft(typeId, quantity) {
  const url = `http://localhost:8080/template/token `;

  axios
    .post(url, {
      typeId: typeId,
      quantity: quantity,
    })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
}
