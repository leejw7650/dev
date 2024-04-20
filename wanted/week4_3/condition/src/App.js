import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <RouterProvider router={router}></RouterProvider>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 80%;
  height: 500px;
  margin: 50px auto;
  padding: 0px;
  border: 3px solid #000;
`;

export default App;
