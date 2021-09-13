import axios from "axios";

export async function updatePlayer(playerId, dto) {
  const url = "http://localhost:8000/player/" + playerId;

  return await axios.patch(url, dto);
}
