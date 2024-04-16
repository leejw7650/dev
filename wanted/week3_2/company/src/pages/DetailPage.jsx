import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useLocation, useParams } from "react-router-dom";
import { IssueContext } from "../store/IssueContext";
import MarkdownRenderer from "../components/MarkdownRenderer";
import styled from "styled-components";

const DetailPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const params = useParams();
  const { issueData } = useContext(IssueContext);

  const currentIssue = issueData.find(
    (issue) => issue.id === parseInt(params.id)
  );

  const issueBody = currentIssue.body;
  const userImage = currentIssue.user.avatar_url;

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <StyledUserImage src={`${userImage}`} alt="avatar"></StyledUserImage>
        <Card issue={currentIssue} />
      </div>
      <MarkdownRenderer markdown={issueBody} />
    </>
  );
};

const StyledUserImage = styled.img`
  height: 80px;
  width: 80px;
`;

export default DetailPage;
