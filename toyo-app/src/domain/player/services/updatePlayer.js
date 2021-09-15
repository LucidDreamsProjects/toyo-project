import axios from "axios";

export async function updatePlayer(playerId, dto) {
  const url = "http://localhost:8080/player/" + playerId;

  return await axios.patch(url, dto);
}
