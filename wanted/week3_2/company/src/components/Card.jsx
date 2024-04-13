import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const CardDiv = styled.div`
  padding: 5px;
  border-bottom: 2px solid #000;
  display: grid;
  grid-template-areas:
    "title comment"
    "detail comment";
  margin: 5px 20px;
  flex: 2 2 auto;
  grid-template-columns: 1fr 100px;

  &:visited {
    color: #000;
  }
`;

const Card = ({ issue }) => {
  const number = issue.number;
  const issue_title = issue.title;
  const name = issue.user.login;
  const post_date = format(Date(issue.created_at), "yyyy년 MM월 dd일");
  const comments = issue.comments;

  return (
    <CardDiv>
      <div
        style={{
          "grid-area": "title",
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "nowrap",
          "font-size": "1.1em",
          "margin-bottom": "3px",
        }}
      >
        <span style={{ "margin-right": "5px", "font-weight": "bold" }}>
          #{number}
        </span>
        <span>{issue_title}</span>
      </div>
      <div style={{ "grid-area": "detail" }}>
        작성자: {name}, 작성일: {post_date}
      </div>
      <div style={{ "grid-area": "comment", textAlign: "center" }}>
        코멘트: {comments}
      </div>
    </CardDiv>
  );
};

export default Card;
