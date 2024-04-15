import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import simpleHttpRequest from "./network/request";
import { useEffect, useState } from "react";
import { IssueContext } from "./store/IssueContext";

function App() {
  const [issueData, setIssueData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  async function fetchData() {
    try {
      const result = await simpleHttpRequest("GET", "/issues", 1);
      setIssueData(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
