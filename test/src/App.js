import React from 'react';
import Nemo from './Nemo';

// Dom 요소 React 요소
function App() {

  return (
    <div className='APP'>
      <Nemo/>
    </div>
  )
}

// useState, useEffect, useRef -> 정말 많이 사용됨.

// useCallback : 특정 함수를 새로만들지 않고 재사용하고 싶을때 사용하는 Hook

// let need_update = false;
// const myNewFunction = React.useCallback(() => {
//   // 내가 하고 싶은 어떤 동작
//   console.log('hello');
// }, [
//   need_update
// ]);

// 참조 : 원본 값이 있다면 가리키는 것.
// useRef : 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 해주는 Hook

export default App;
