import React, { useRef, useState } from "react";
import TextComponent from "./shared/components/TextComponent";
import axios from "axios";
import "./components.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const usersAccount = useRef({});
  const initialUserInfo = {
    email: "",
    pw: "",
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
      <h1>Log In</h1>
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
          <div id="notice-email" className="notice"></div>
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
          <div id="notice-pw" className="notice"></div>
        </div>
      </div>
      <div>
        <button onClick={() => {}}>log in</button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          sign up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
