import React, { useContext, useRef, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { IssueContext } from "../store/IssueContext";
import catImage from "../cat_image.jpg";
import styled from "styled-components";
import simpleHttpRequest from "../network/request";

const ListPage = (props) => {
  const { issueData, setIssueData, pageNum, setPageNum } =
    useContext(IssueContext);

  const sentinelRef = useRef(null);

  const options = {
    root: null,
    threshold: 1,
    rootMargin: "0px",
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(sentinelRef.current);
    console.log(issueData.length);
    return () => {
      observer.disconnect(); // disconnect는 Observer랑 모든 요소를 끊음. unobserve는 특정 요소만 끊음. 여기서는 둘 다 상관없음.
    };
  }, [issueData]);

  const handleIntersection = async (entries) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        try {
          const result = await simpleHttpRequest("GET", "/issues", pageNum + 1);
          setPageNum(pageNum + 1);
          if (result.data.length !== 0) {
            setIssueData([...issueData, ...result.data]);
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {issueData.slice(0, 4).map((issue) => {
        return (
          <StyledLink
            to={`/detail/${issue.id}`}
            key={issue.id}
            className="issue-card"
          >
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
      {issueData.slice(4).map((issue) => {
        return (
          <StyledLink
            to={`/detail/${issue.id}`}
            key={issue.id}
            preventScrollReset={false}
            className="issue-card"
          >
            <Card issue={issue} />
          </StyledLink>
        );
      })}
      <div ref={sentinelRef}></div>
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:visited {
    color: #000;
  }
`;

export default ListPage;
