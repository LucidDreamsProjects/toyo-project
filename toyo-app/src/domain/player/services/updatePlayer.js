import axios from "axios";

export async function updatePlayer(playerId, dto) {
  const url = "http://localhost:8080/player/" + playerId;
  console.log(url);

  return await axios.patch(url, dto);
}
