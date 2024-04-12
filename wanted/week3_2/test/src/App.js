import React from "react";
import "./App.css";
import instance from "./axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: green;
  width: 200px;
  height: 200px;
`;

function App() {
  const callApi = async () => {
    try {
      await instance.get("users");
    } catch (e) {
      console.log("에러가 났어요!", e);
    } finally {
      console.log("무조건 실행되는 finally");
    }
  };

  React.useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      <StyledDiv></StyledDiv>
    </div>
  );
}

export default App;
