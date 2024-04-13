import axios from "axios";

async function simpleHttpRequest(method = "GET", url = "/", data = {}) {
  let response = null;
  const baseUrl = "https://api.github.com/repos/angular/angular-cli";
  const accessToken = "";

  // Create an Axios instance with the authorization header
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Use the Axios instance to make the request
  if (method === "GET") {
    response = await axiosInstance.get(baseUrl + url);
  }
  return response;
}

export default simpleHttpRequest;
