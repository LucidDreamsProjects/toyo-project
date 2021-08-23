import axios from "axios";
import { SavePlayerDto } from "./dto/save-player.dto";

export async function savePlayer(player: SavePlayerDto): Promise<void> {
  const url = "http://localhost:8080/player/create";

  return await axios.post(url, player);
}
