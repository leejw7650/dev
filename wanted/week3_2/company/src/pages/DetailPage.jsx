import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const DetailPage = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <img
          style={{ height: "80px", width: "80px" }}
          src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
        ></img>
        <Card />
      </div>
    </div>
  );
};

export default DetailPage;
