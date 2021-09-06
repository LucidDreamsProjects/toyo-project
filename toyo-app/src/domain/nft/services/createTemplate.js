import axios from "axios";

export async function createTemplate(template) {
  const url = "http://localhost:8080/template";

  return await axios.post(url, template);
}
