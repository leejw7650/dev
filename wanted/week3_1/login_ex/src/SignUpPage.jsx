import React, { useRef, useState } from "react";
import TextComponent from "./shared/components/TextComponent";
import axios from "axios";
import "./components.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const usersAccount = useRef({});
  const initialUserInfo = {
    email: "",
    pw: "",
    nickname: "",
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const callLoginApi = async () => {
    const response = await axios.get("http://localhost:5001/users/");
    console.log(response.data);
  };

  const postUserInfo = async () => {
    await axios.post("http://localhost:5001/users/", userInfo);
  };
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Sign Up</h1>
      <div className="user-info-container">
        <div className="container">
          <div className="info-text">e-mail : </div>
          <TextComponent
            userDetail={userInfo.email}
            changeDetailFn={(event) => {
              setUserInfo({ ...userInfo, email: event.target.value });
            }}
            type={"text"}
          />
          <div id="notice-email" className="notice">
            Enter email
          </div>
        </div>
        <div className="container">
          <div className="info-text">password : </div>
          <TextComponent
            userDetail={userInfo.pw}
            changeDetailFn={(event) => {
              setUserInfo({ ...userInfo, pw: event.target.value });
            }}
            type={"password"}
          />
          <div id="notice-pw" className="notice">
            6 or more characters
          </div>
        </div>
        <div className="container">
          <div className="info-text">nickname : </div>
          <TextComponent
            userDetail={userInfo.nickname}
            changeDetailFn={(event) => {
              setUserInfo({ ...userInfo, nickname: event.target.value });
            }}
            type={"text"}
          />
          <div id="notice-nickname" className="notice">
            Enter nickname
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            let logInSuccess = true;
            if (userInfo.email === "") {
              const noticeTextEmail = document.getElementById("notice-email");
              noticeTextEmail.style.opacity = "100%";
              logInSuccess = false;
            }
            if (userInfo.pw.length < 6) {
              const noticeTextPw = document.getElementById("notice-pw");
              noticeTextPw.style.opacity = "100%";
              logInSuccess = false;
            }
            if (userInfo.nickname === "") {
              const noticeTextNickname =
                document.getElementById("notice-nickname");
              noticeTextNickname.style.opacity = "100%";
              logInSuccess = false;
            }
            if (logInSuccess === true) {
              usersAccount.current = {
                ...usersAccount.current,
                [userInfo.email]: userInfo,
              };
              setUserInfo(initialUserInfo);
              postUserInfo();
              callLoginApi();
              const noticeTextEmail = document.getElementById("notice-email");
              noticeTextEmail.style.opacity = "0%";
              const noticeTextPw = document.getElementById("notice-pw");
              noticeTextPw.style.opacity = "0%";
              const noticeTextNickname =
                document.getElementById("notice-nickname");
              noticeTextNickname.style.opacity = "0%";
            }
          }}
        >
          submit
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          log in
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
