import "./App.css";
import add, { getNumbers } from "./claculator";

function App() {
  console.log(add(1, 2));
  getNumbers();
  return <div className="App"></div>;
}

export default App;

// 테스트 순서

// 1. 테스트할 함수 만들기

// 2. 테스트 코드 작성
//   -

// 3.
