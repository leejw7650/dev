import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import simpleHttpRequest from "./network/request";
import { useEffect, useRef } from "react";
import { IssueContext } from "./store/IssueContext";

function App() {
  const userData = useRef();

  async function fetchData() {
    try {
      const result = await simpleHttpRequest("GET", "/issues");
      userData.current = result.data;
      console.log("함수 내부: ", userData.current);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <IssueContext.Provider value={{ userData }}>
        <RouterProvider router={router}></RouterProvider>
      </IssueContext.Provider>
    </div>
  );
}

export default App;
