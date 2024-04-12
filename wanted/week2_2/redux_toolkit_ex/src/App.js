import React, { useState } from "react";
import './App.css';
import './components.css';
import {Cat, Dog, Home} from './Component';

function App() {
  const [a, setA] = useState(1);
  // cat : rootReducer 에서 정한 이름의 모듈
  // console.log(myStoreData);

  return (
    <div className="App">
      {a}

      <button onClick={() => {
        setA(a + 1);
        console.log(a);
      }}>Change</button>

      <Home setA={setA}/>

      <Dog />
      <Cat />
    </div>
  ) ;
};

export default App;