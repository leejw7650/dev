import React from 'react';
import { useDispatch } from 'react-redux';
import {addCat} from './redux/modules/cat';

const Cat = ({a}) => {
    return (
        <div>
            <h1>고양이</h1>
            <h1>App 이 전달해준 {a}</h1>
        </div>
    );
};


const Dog = () => {
    return (
        <div>
            <h1>강아지</h1>
        </div>
    );
};


const Home = (props) => {
    const {setA} = props;

    const dispatch = useDispatch();

    return (
        <div>
            <h1>홈</h1>
            <button onClick={() => {
                setA(prev => prev + 1);
            }}>Change</button>

            <button onClick={() => {
                dispatch(
                    addCat("펄이2")
                );
            }}>고양이 추가</button>
        </div>
    );
};

export {Cat, Dog, Home};

