import axios from "axios";

export async function getAccessToken() {
  const baseUrl = process.env.REACT_APP_BASE_PRODUCTION_URL;
  const url = `${baseUrl}/auth`;

  console.log(url);

  return await axios
    .post(url)
    .then((response) => {
      // console.log(response);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
