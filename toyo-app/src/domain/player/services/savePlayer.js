import axios from "axios";

export async function savePlayer(player) {
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTION_URL;
  const url = `${baseUrl}/player`;

  return await axios.post(url, player);
}
