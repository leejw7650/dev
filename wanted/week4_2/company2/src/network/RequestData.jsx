import axiosInstance from "./instance";

async function RequestData(base, symbol) {
  const params = {
    base,
    symbol,
  };
  const result = await axiosInstance.get("/latest", { params: params });
  return result;
}

export default RequestData;
