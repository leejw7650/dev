import axios from "axios";

const apikey = process.env.REACT_APP_API;
const axiosInstance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data",
  redirect: "follow",
  headers: {
    apikey,
  },
});

export default axiosInstance;
