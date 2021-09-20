import axios from "axios";

export async function updatePlayer(playerId, dto) {
  const baseUrl = process.env.REACT_APP_BASE_STAGING_URL;
  const url = `${baseUrl}/player/` + playerId;
  console.log(url);

  return await axios.patch(url, dto);
}
