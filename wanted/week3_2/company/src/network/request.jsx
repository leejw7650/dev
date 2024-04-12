import axios from "axios";

async function simpleHttpRequest(method = "GET", url = "/", data = {}) {
  let response = null;
  const baseUrl = "베이스 자리";
  const accessToken = "토큰 자리";

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
