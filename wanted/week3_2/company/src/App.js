import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import getDataRequest from "./network/request";
import { useEffect, useState } from "react";
import { IssueContext } from "./store/IssueContext";
import axios from "axios";

function App() {
  // test
  const [issueData, setIssueData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const accessToken = process.env.REACT_APP_API;
  const axiosInstance = axios.create({
    baseURL: "https://api.github.com/repos/angular/angular-cli",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  async function fetchData() {
    try {
      const result = await getDataRequest(axiosInstance, "/issues", 1);
      if (result.data.length !== 0) {
        setIssueData([...issueData, ...result.data]);
      }
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
        value={{ issueData, setIssueData, pageNum, setPageNum, axiosInstance }}
      >
        <RouterProvider router={router}></RouterProvider>
      </IssueContext.Provider>
    </div>
  );
}

export default App;
