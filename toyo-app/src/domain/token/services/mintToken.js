import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function mintToken(address, typeId, quantity) {
  const baseUrl = process.env.REACT_APP_BASE_STAGING_URL;
  const url = `${baseUrl}/template/token `;

  return await axios
    .post(url, {
      wallet: address,
      typeId: typeId,
      quantity: quantity,
    })
    .then((response) => {
      toast.success("🦄 Plim! And it's done ✨");
      return response.data[0];
    })
    .catch(async (props, error) => {
      toast.error("🦄 Sorry, something went wrong...");
      console.log(error);
    });
}
