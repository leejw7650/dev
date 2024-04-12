import "./App.css";
import React from 'react';
import {TextArea, Button, Input} from './components';

// Dom 요소 React 요소

function App() {

  // 아래와 같은 방법을 구조 분해 할당이라고 부름.
  const [text, setText] = React.useState("");
  const input_ref = React.useRef(null);

  console.log("App render");
  console.log("")
  const hoverEffect = (e) => {
    const textElement = document.getElementById("text");
    textElement.addEventListener("mouseover", (e) => {
      console.log(e.target);
    });
  }

  React.useEffect(() => {
    hoverEffect();
  })

  return (
    <div className="App" style={{ display: "flex", gap: 10 }}>
      <div>
        <TextArea text={text} />
      </div>
      <div>
        <h1 id="text">Hi, I'm text.</h1>
      </div>
      <div>
        <Input input_ref={input_ref} />
        <Button setText={setText} input_ref={input_ref} />
      </div>
    </div>
  );
}

export default App;