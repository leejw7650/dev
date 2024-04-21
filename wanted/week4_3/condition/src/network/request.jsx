import axiosInstance from "./API";

async function request(date) {
  let response = null;
  const params = {
    date,
  };
  response = await axiosInstance.get("./", { params: params });
  return response;
}

export default request;
