import axiosInstance from "./API";

async function putData(date, rate) {
  let response = null;
  const data = {
    date: date,
    rate: rate,
  };
  response = await axiosInstance.put(`./${date}`, data);
  return response;
}

export default putData;
