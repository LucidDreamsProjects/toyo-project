import axios from "axios";

export async function savePlayer(player) {
  const url = "http://localhost:8080/player/save";

  return await axios
    .post(url, player)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
