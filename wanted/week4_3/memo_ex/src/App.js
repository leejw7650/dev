import React, { useMemo, useState } from "react";

const MemoComponent = ({ a, b, c }) => {
  console.log(a, b, c);

  const add = (a, b) => {
    console.time("test");
    console.log(a + b);
    console.timeEnd("test"); // 시간이 얼마나 걸리는 지 알고 싶을 때 사용

    console.log("add 함수 호출");
    return a + b;
  };

  const memorizedValue = useMemo(() => {
    add(a, b);
  }, [a, b]);

  return (
    <div>
      <h1>메모 컴포넌트</h1>
      <p>
        숫자들 : {a},{b},{c}
      </p>
      <p>더한 값 : {a + b + c}</p>

      <ParentComponent />
    </div>
  );
};

const ParentComponent = () => {
  const [name, setName] = useState("perl");
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "80%",
        margin: "10px",
        padding: "10px",
        display: "grid",
      }}
    >
      <h1>부모 컴포넌트</h1>
      <ChildOne name={name} />
      <ChildTwo />
      <p>{name}</p>
      <button
        onClick={() => {
          setName(name + " a");
        }}
      >
        이름 변경
      </button>
    </div>
  );
};
const ChildOne = ({ name }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "80%",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>자식 컴포넌트1</h1>
    </div>
  );
};
const ChildTwo = React.memo(() => {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "80%",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>자식 컴포넌트2</h1>
      <ChildThree />
    </div>
  );
});
const ChildThree = () => {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "80%",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>자식 컴포넌트3</h1>
    </div>
  );
};

function App() {
  const [numbers, setNumbers] = useState({
    a: 0,
    b: 1,
    c: 2,
  });
  return (
    <div className="App">
      <MemoComponent a={numbers.a} b={numbers.b} c={numbers.c} />
      <button
        onClick={() => {
          setNumbers({ ...numbers, a: numbers.a + 1, b: numbers.b + 1 });
        }}
      >
        a, b 변경
      </button>
      <button
        onClick={() => {
          setNumbers({ ...numbers, c: numbers.c + 1 });
        }}
      >
        c 변경
      </button>
    </div>
  );
}

export default App;
