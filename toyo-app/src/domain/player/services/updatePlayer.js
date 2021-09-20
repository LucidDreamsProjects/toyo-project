import axios from "axios";

export async function updatePlayer(playerId, dto) {
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTIN_URL;
  const url = `${baseUrl}/player/` + playerId;

  return await axios.patch(url, dto);
}
