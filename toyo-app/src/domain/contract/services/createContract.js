import axios from "axios";

export async function createContract(contract) {
  const baseUrl = process.env.REACT_APP_BASE_STAGING_URL;
  const url = `${baseUrl}/contract`;

  return await axios.post(url, contract);
}
