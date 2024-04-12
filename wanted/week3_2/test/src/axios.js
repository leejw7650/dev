import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  console.log("instance 에서 받아온 config: ", config);
  const _conf = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: "test_token_123",
    },
  };
  console.log(_conf);
  return config;
});

instance.interceptors.response.use(
  (config) => {
    console.log("response interceptor에서 에서 받아옴");

    return config;
  },
  (error) => {
    console.log("에러났음.");
    // console.log(error);

    let my_error = new Error("에러가 났대요;;");
    return Promise.reject(my_error);
  }
);

export default instance;
