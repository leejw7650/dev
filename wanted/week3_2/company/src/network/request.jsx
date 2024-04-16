async function getDataRequest(axiosInstance, url = "/", page = 1) {
  let response = null;
  const params = {
    page: page,
    state: "open",
    sort: "comments-desc",
  };
  response = await axiosInstance.get(url, { params: params });
  return response;
}

export default getDataRequest;
