import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/conditions",
});

export default axiosInstance;
