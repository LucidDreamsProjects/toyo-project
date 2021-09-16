import { mintToken } from "./mintToken";

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

  return await arkaneConnect
    .createSigner()
    .executeTransfer(transactionRequest)
    .then(async (result) => {
      const mintedToken = await mintToken(address, typeId, quantity);
      console.log(mintedToken);
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
}
