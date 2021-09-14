import axios from "axios";

export async function findPlayerById(playerId) {
  const url = "http://162.240.6.22:8080/player/" + playerId;

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
