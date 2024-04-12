import React, { useContext } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { IssueContext } from "../store/IssueContext";

const ListPage = (props) => {
  const userData = useContext(IssueContext);
  const users = userData.userData.current;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {users.slice(0, 4).map((issue) => {
        console.log(issue.user);
        return (
          <Link to="./detail" key={issue.id}>
            <Card issue={issue} />
          </Link>
        );
      })}
      <a
        href="https://thingsflow.com/ko/home"
        style={{ margin: "5px 20px", border: "2px solid #000", height: "60px" }}
      >
        <img
          width="100%"
          height="100%"
          src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
        ></img>
      </a>
      {users.slice(4).map((issue) => {
        return (
          <Link to="./detail" key={issue.id}>
            <Card issue={issue} />
          </Link>
        );
      })}
    </div>
  );
};

export default ListPage;
