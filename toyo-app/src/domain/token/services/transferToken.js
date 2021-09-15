export async function transferToken(arkaneConnect, dto) {
  console.log("transferToken: ", dto);

  return await arkaneConnect
    .createSigner()
    .executeTransfer(dto)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
