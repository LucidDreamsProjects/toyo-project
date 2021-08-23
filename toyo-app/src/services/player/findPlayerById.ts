import { Player } from "./entity/player";
import axios from "axios";

export async function findPlayerById(uuid: string): Promise<Player> {
  const url = "http://localhost:8080/player/:playerID";

  const params = new URLSearchParams();
  params.append("playerID", uuid);

  const player = await axios({
    method: "get",
    url: url,
    data: params,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));

  if (player) {
    return player;
  }
}
