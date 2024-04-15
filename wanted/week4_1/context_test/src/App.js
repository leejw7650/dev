import React, { useState } from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";

import MyStore from "./store/store";

function App() {
  const [name, setName] = useState("이름 기본 값");

  // Context API 를 쓰지 않을 컴포넌트는 Provider 하에 두기 않기!!!
  return (
    <div className="App">
      <MyStore.Provider value={{ name, setName }}>
        <Cat />
        <Dog />
      </MyStore.Provider>
    </div>
  );
}

export default App;
