import axios from "axios";
import { SaveNftDto } from "./dto/save-nft.dto";

export async function createNft(nft: SaveNftDto): Promise<void> {
  const url = "http://localhost:8080/nft/create";

  return await axios.post(url, nft);
}
