import axios from "axios";

export async function createTemplate(template) {
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTION_URL;
  const url = `${baseUrl}/template`;

  return await axios.post(url, template);
}
