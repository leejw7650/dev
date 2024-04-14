import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div style={{ padding: "5px", marginTop: "5px" }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
