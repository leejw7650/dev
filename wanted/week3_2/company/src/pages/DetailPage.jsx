import React, { useContext } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { IssueContext } from "../store/IssueContext";
import MarkdownRenderer from "../components/MarkdownRenderer";

const DetailPage = () => {
  const params = useParams();
  const { issueData } = useContext(IssueContext);

  const currentIssue = issueData.filter(
    (issue) => issue.id === parseInt(params.id)
  );
  const issueBody = currentIssue[0].body;
  const userImage = currentIssue[0].user.avatar_url;
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <img
          style={{ height: "80px", width: "80px" }}
          src={`${userImage}`}
          alt="avatar"
        ></img>
        <Card issue={currentIssue[0]} />
      </div>
      <MarkdownRenderer markdown={issueBody} />
    </div>
  );
};

export default DetailPage;
