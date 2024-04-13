import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import simpleHttpRequest from "./network/request";
import { useEffect, useRef, useState } from "react";
import { IssueContext } from "./store/IssueContext";

function App() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const issueData = useRef([]);

  async function fetchData() {
    try {
      const result = await simpleHttpRequest("GET", "/issues");
      issueData.current = result.data;
      setIsDataFetched(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "0 10px" }}>
      <IssueContext.Provider value={{ issueData }}>
        <RouterProvider router={router}></RouterProvider>
      </IssueContext.Provider>
    </div>
  );
}

export default App;
