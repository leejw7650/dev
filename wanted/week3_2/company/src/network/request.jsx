import axios from "axios";

async function simpleHttpRequest(method = "GET", url = "/", page = 1) {
  let response = null;
  const accessToken = process.env.REACT_APP_API;

  // Create an Axios instance with the authorization header
  const axiosInstance = axios.create({
    baseURL: "https://api.github.com/repos/angular/angular-cli",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Use the Axios instance to make the request
  if (method === "GET") {
    const params = {
      page: page,
      state: "open",
      sort: "comments-desc",
    };
    response = await axiosInstance.get(url, { params: params });
  }
  return response;
}

export default simpleHttpRequest;
