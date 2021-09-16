import axios from "axios";

export async function findPlayerById(playerId) {
  const url = "http://localhost:8080/player/" + playerId;

  console.log(url);

  const player = await axios({
    method: "get",
    url: url,
  })
    .then((response) => {
      console.log("👷 Player found!");
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(`👷 Player not found... 😢`);
    });

  if (player) {
    return player;
  }
}
