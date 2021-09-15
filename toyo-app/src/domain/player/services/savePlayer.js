import axios from "axios";

export async function savePlayer(player) {
  const url = "http://localhost:8080/player";

  return await axios.post(url, player);
}
