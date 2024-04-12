import React, { useState } from "react";
import './App.css';
import './components.css';
import {Cat, Dog, Home} from './Component';

import { useSelector } from "react-redux";

function App() {
  const [a, setA] = useState(1);

  const myStoreData = useSelector((state) => state.cat);
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

      <Cat a={a}/>

      {myStoreData.cat_arr.map((cat, index) => {
        return (
          <p key={index}>{cat}</p>
        )
      })}

      <Dog />
    </div>
  ) ;
};

export default App;