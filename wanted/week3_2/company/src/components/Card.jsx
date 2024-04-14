import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

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
          gridArea: "title",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: "1.1em",
          marginBottom: "3px",
        }}
      >
        <span style={{ marginRight: "5px", fontWeight: "bold" }}>
          #{number}
        </span>
        <span>{issue_title}</span>
      </div>
      <div style={{ gridArea: "detail" }}>
        작성자: {name}, 작성일: {post_date}
      </div>
      <div style={{ gridArea: "comment", textAlign: "center" }}>
        코멘트: {comments}
      </div>
    </CardDiv>
  );
};

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

export default Card;
