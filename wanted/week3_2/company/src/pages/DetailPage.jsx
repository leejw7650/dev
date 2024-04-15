import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useLocation, useParams } from "react-router-dom";
import { IssueContext } from "../store/IssueContext";
import MarkdownRenderer from "../components/MarkdownRenderer";

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
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <img
          style={{ height: "80px", width: "80px" }}
          src={`${userImage}`}
          alt="avatar"
        ></img>
        <Card issue={currentIssue} />
      </div>
      <MarkdownRenderer markdown={issueBody} />
    </div>
  );
};

export default DetailPage;
