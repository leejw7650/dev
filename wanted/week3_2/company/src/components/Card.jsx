import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  padding: 5px;
  border-bottom: 2px solid #000;
  display: grid;
  grid-template-areas: "issue comment";
  margin: 5px 20px;
  flex: 2 2 auto;
`;

const IssueDiv = styled.div`
  display: grid;
`;

const Card = ({ issue }) => {
  const number = issue.number;
  const issue_title = issue.title;
  const name = issue.user.login;
  const post_date = issue.created_at;
  const comments = issue.comments;

  return (
    <CardDiv>
      <div grid-area="issue">
        <div>
          #{number} {issue_title}
        </div>
        <div>
          작성자: {name}, 작성일: {post_date}
        </div>
      </div>
      <div grid-area="comment" style={{ textAlign: "center" }}>
        코멘트: {comments}
      </div>
    </CardDiv>
  );
};

export default Card;
