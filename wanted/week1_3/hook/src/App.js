import './App.css';
import React, { useState, useEffect, useRef, useCallback} from 'react';


function App() {

  const [count, setCount] = useState(0 /* 초기 count 값 */) ;

  const render = useRef(0) ;
  const render2 = useRef(0) ;

  const refCount = useRef(0) ;

  useEffect(() => {
    render.current = render.current + 1;
  })

  useEffect(() => {
    render2.current = render2.current + 1;
  }, [])
  
  return (
    <div className="App">
      <h1>Hook Practice</h1>

      <hr />
      <hr />

      <div className='useState'>
        <h3>useState</h3>
        <div style={{backgroundColor:'#8f8f8f'}}>count : {count}</div>
        <button onClick={() => setCount(count + 1)}>count up</button>
      </div>

      <hr />

      <div className='useEffect'>
        <h3>useEffect</h3>
        <div style={{backgroundColor:'#8f8f8f'}}>rendered count : {render.current}</div>
        <div> (count 보다 1 큰 이유는 제일 처음 렌더링됐기 때문.)</div>
        <br/>
        <div style={{backgroundColor:'#8f8f8f'}}>rendered count2 : {render2.current}</div>
        <div> (useEffect의 두번째 인자로 빈 리스트를 넣으면 첫 렌더링 시에만 동작.)</div>
        <br />
        <div> (추가로 useEffect 내에 {'return() => {}'}을 추가하면, 해당 컴포넌트가 화면에서 사라질 경우(unmount 될 경우) 실행될 작업을 의미한다. 이를 clean up 이라고 말한다.)</div>


      </div>

      <hr />
      
      <div className='useRef'>
        <h3>useRef</h3>
        <div style={{backgroundColor:'#8f8f8f'}}>refCount : {refCount.current}</div>
        <button onClick={() => {
          refCount.current ++ ;
          console.log('refCount :',refCount.current);
        }}>count up refCount</button>
        <div> (버튼을 누르면 refCount는 커지지만 리렌더링 되기 전엔 볼 수 없음.)</div>
      </div>

      <hr />

      <div className='useMemo'>


      </div>
    </div>
  );
}

export default App;
