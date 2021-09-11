import axios from "axios";

export async function savePlayer(player) {
  const url = "http://localhost:8000/player";

  return await axios.post(url, player);
}
