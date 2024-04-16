import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Card = ({ issue }) => {
  const number = issue.number;
  const issue_title = issue.title;
  const name = issue.user.login;
  const post_date = format(new Date(issue.created_at), "yyyy년 MM월 dd일");
  const comments = issue.comments;

  return (
    <StyledCardDiv>
      <StyledIssueDiv>
        <StyledNumberSpan>#{number}</StyledNumberSpan>
        <span>{issue_title}</span>
      </StyledIssueDiv>
      <StyledUserNameDateDiv>
        작성자: {name}, 작성일: {post_date}
      </StyledUserNameDateDiv>
      <StyledCommentsDiv>코멘트: {comments}</StyledCommentsDiv>
    </StyledCardDiv>
  );
};

const StyledIssueDiv = styled.div`
  grid-area: title;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.1em;
  margin-bottom: 3px;
`;

const StyledNumberSpan = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const StyledUserNameDateDiv = styled.div`
  grid-area: detail;
`;

const StyledCommentsDiv = styled.div`
  grid-area: comment;
  text-align: center;
`;

const StyledCardDiv = styled.div`
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
