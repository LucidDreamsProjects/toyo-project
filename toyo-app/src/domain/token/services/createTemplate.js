import axios from "axios";

export async function createTemplate(template) {
  const url = "http://162.240.6.22:8080/template";

  return await axios.post(url, template);
}
