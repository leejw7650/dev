import React, { useContext } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { IssueContext } from "../store/IssueContext";
import catImage from "../cat_image.jpg";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &: visited {
    color: #000;
  }
`;

const ListPage = (props) => {
  const issueData = useContext(IssueContext);
  const issues = issueData.issueData.current;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {issues.slice(0, 4).map((issue) => {
        console.log(issue.id);
        return (
          <StyledLink to={`/detail/${issue.id}`} key={issue.id}>
            <Card issue={issue} />
          </StyledLink>
        );
      })}
      <a
        href="https://www.wanted.co.kr/"
        style={{
          margin: "5px 20px",
          border: "2px solid #000",
          height: "60px",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={catImage}
          alt="Cat"
        ></img>
      </a>
      {issues.slice(4).map((issue) => {
        return (
          <StyledLink to={`/detail/${issue.id}`} key={issue.id}>
            <Card issue={issue} />
          </StyledLink>
        );
      })}
    </div>
  );
};

export default ListPage;
