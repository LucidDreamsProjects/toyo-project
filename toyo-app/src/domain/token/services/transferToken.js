import { mintToken } from "./mintToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function transferToken(
  arkaneConnect,
  transactionRequest,
  mintRequest
) {
  console.log("transactionRequest: ", transactionRequest);
  console.log("mintRequest: ", mintRequest);

  const address = mintRequest.address;
  const typeId = mintRequest.typeId;
  const quantity = mintRequest.quantity;

  // console.log("quantity: ", quantity);

  return await arkaneConnect
    .createSigner()
    .executeTransfer(transactionRequest)
    .then(async (result) => {
      toast.success("🦄 Plim! Transfer realized ✨");
      toast.info("👷 Your NFT is being minted! ✨", { autoClose: 10000 });
      const mintedToken = await mintToken(address, typeId, quantity);
      console.log("👷 Here is your(s) newmade NFT(s): ", mintedToken);
      return result;
    })
    .catch((error) => {
      toast.error("🦄 Sorry, something went wrong...");
      console.log(error);
    });
}
