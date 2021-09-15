import axios from "axios";

export async function createContract(contract) {
  const url = "http://localhost:8080/contract";

  return await axios.post(url, contract);
}
