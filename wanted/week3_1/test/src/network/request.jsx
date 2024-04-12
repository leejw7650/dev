// 네트워크 요청만을 담당하는 함수 만들기

// 현없에서는 주로 class 로 만듬.

import axios from "axios";

async function simpleHttpRequest(method = "GET", url = "/", data = {}) {
  let response = null;
  let baseUrl = "http://localhost:5001";
  // axios 써서 요청하기
  axios.create({
    // baseURL: "http://localhost:5001",
    header: {
      "Content-Type": "application/json",
    },
  });

  if (method === "GET") {
    response = await axios.get(baseUrl + url);
  }

  return response;
}

export default simpleHttpRequest;

// http 할 때 순서
// xhr

// 1. 요청을 만들어야 함
// 2. 어떤 곳으로, 어떤 데이터랑, 어떤 방식으로
// 3. 요청을 보내야 함
// 4. 요청에 대한 응답을 받아와야 함
// 5. 후처리
