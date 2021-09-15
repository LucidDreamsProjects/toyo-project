export async function transferNftToken(arkaneConnect, dto) {
  console.log("transferNft: ", dto);

  return await arkaneConnect
    .createSigner()
    .executeNftTransfer(dto)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
