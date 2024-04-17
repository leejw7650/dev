import axios from "axios";

const accessToken = process.env.REACT_APP_API;
const axiosInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default axiosInstance;
