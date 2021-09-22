import axios from "axios";

export async function findPlayerById(playerId) {
  const baseUrl = process.env.REACT_APP_BASE_STAGING_URL;
  const url = `${baseUrl}/player/` + playerId;

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
