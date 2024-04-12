// 네트워크 요청을 보내려면 우리가 해야하는 일들

// 1. 보낼 요청을 만들어줘야함.

let xhr = new XMLHttpRequest();

// 2. 그리고 보낼 요청에 어떤 주소로, 어떤 방식으로, 어떤 데이터를 보낼지 넣어줘야함.
xhr.open("GET", "http://localhost:5001/sleep_times");

// 3. 응답을 어떻게 받고 싶은지 알려줘야함.
// xhr.onload = function () {
//   console.log("hear!");
// };

xhr.onreadystatechange = function (e) {
  console.log(e);
};

// 4. 응답을 내가 어떻게 처리할 지 적어줘야 함.

// 5. 요청 보낸다.
xhr.send();

console.log(xhr);
