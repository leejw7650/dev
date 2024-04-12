import {createStore} from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Store 내 State를 어떻게 바꿀 것인가?
const reducer = (currentState, action) => {
    if (currentState === undefined) {
        return {
        'number' : 1,
        };
    };
    const newState = {...currentState};
    if (action.type === 'PLUS') {
        newState.number ++;
    }
    return newState // 새로운 State 값
};

const store = createStore(reducer); // 저장소 생성

const Root = () => {
    console.log('Root rendered');
    return (
        <div className='root' style={{width:'70%'}}>
            <h1>Root</h1>
            <div>
                <Provider store={store}>
                    <Left1 />
                    <Right1 />
                </Provider>
            </div>
        </div>
    );
};

const Left1 = () => {
    console.log('Left1 rendered');
    return (
        <div className='container'>
            <h1>Left1</h1>
            <Left2 />
        </div>
    );
};

const Left2 = () => {
    console.log('Left2 rendered');
    return (
        <div className='container'>
            <h1>Left2</h1>
            <Left3 />
        </div>
    )
};

const Left3 = () => {
    console.log('Left3 rendered');

    // State 에서 가져오고 싶은 값 가져오기
    const number = useSelector(state => state.number);
    return (
        <div className='container'>
            <h1>Left3 : {number}</h1>
        </div>
    );
};

const Right1 = () => {
    console.log('Right1 rendered');
    return (
        <div className='container'>
            <h1>Right1</h1>
            <Right2 />
        </div>
    );
};

const Right2 = () => {
    console.log('Right2 rendered');
    return (
        <div className='container'>
            <h1>Right2</h1>
            <Right3 />
        </div>
    );
};

const Right3 = () => {
    console.log('Right3 rendered');
    // reducer 에게 명령을 전달할 디스패치 선언
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <h1>Right3</h1>
            <input type='button' value='+' onClick= {() => {
                // reducer에게 내리고 싶은 명령 타입을 선언
                dispatch({ type: 'PLUS' })
            }}></input>
        </div>
    );
};

export default Root;