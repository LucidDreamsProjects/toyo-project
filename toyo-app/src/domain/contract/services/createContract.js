import axios from "axios";

export async function createContract(contract) {
  const url = "http://162.240.6.22:8080/contract";

  return await axios.post(url, contract);
}
