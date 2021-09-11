import axios from "axios";

export async function createTemplate(template) {
  const url = "http://localhost:8000/template";

  return await axios.post(url, template);
}
