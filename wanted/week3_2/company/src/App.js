import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useState } from "react";
import { IssueContext } from "./store/IssueContext";

function App() {
  const [issueData, setIssueData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  return (
    <div style={{ padding: "0 10px" }}>
      <IssueContext.Provider
        value={{ issueData, setIssueData, pageNum, setPageNum }}
      >
        <RouterProvider router={router}></RouterProvider>
      </IssueContext.Provider>
    </div>
  );
}

export default App;
