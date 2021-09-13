export async function transferToken(arkaneConnect, dto) {
  console.log(dto);

  await arkaneConnect
    .createSigner()
    .executeNftTransfer(dto)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
