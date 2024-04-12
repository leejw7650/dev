import React, { useState, useRef } from "react";
import TextComponent from "./shared/components/TextComponent";
import simpleHttpRequest from "./network/request";

const Main = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    pw: "",
  });
  const accessToken = useRef();

  const callLoginApi = async () => {
    const response = await simpleHttpRequest("GET", "/users/0");
    // const response = await axios.get("http://localhost:5001/users/0");
    console.log("response : ", response);
    console.log("response.data : ", response.data);
    console.log("response.data.access_token : ", response.data.access_token);
    accessToken.current = response.data.access_token;
    console.log(accessToken.current);
  };

  const login = () => {
    if (loginInfo.pw.length < 4) {
      console.log("over 4 charactors, please");
      setLoginInfo({ ...loginInfo, pw: "" });
    }
    console.log("loginInfo : ", loginInfo);
    callLoginApi();
    localStorage.setItem("access_token", `${accessToken.current}`);
  };

  return (
    <div>
      <h1>로그인</h1>
      {/* <input
        value={loginInfo.email}
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={(event) => {
          setLoginInfo({ ...loginInfo, email: event.target.value });
        }}
        style={{ width: "50%", margin: "5px" }}
      />
      <br />
      <input
        value={loginInfo.pw}
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={(event) => {
          setLoginInfo({ ...loginInfo, pw: event.target.value });
        }}
        style={{ width: "50%", margin: "5px" }}
      /> */}

      <TextComponent
        text={loginInfo.email}
        changeTextFn={(event) => {
          setLoginInfo({ ...loginInfo, email: event.target.value });
        }}
        inputType={"text"}
      />
      <TextComponent
        text={loginInfo.pw}
        changeTextFn={(event) => {
          setLoginInfo({ ...loginInfo, pw: event.target.value });
        }}
        inputType={"password"}
      />

      <br />
      <button
        onClick={() => {
          login();
        }}
        style={{ width: "50%", margin: "5px" }}
      >
        log in
      </button>
      <br />

      {/* <br />
      <button
        onClick={() => {
          localStorage.setItem("pw", "dev@dev.io");
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("pw");
        }}
      >
        delete
      </button> */}
    </div>
  );
};

export default Main;
