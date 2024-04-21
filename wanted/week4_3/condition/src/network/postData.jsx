import axiosInstance from "./API";

async function postData(date) {
  let response = null;
  const data = {
    id: date,
    date: date,
    rate: 0,
  };
  response = await axiosInstance.post("./", data);
  return response;
}

export default postData;
