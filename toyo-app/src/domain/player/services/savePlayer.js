import axios from "axios";

export async function savePlayer(player) {
  const url = "http://162.240.6.22:8080/player";

  return await axios.post(url, player);
}
