import React from 'react';
import { useDispatch } from 'react-redux';
import { addDog } from './redux/slices/dog';
import { addCat } from './redux/slices/cat';
import { useSelector } from "react-redux";


const Dog = () => {

    const dog = useSelector((state) => state.dog.dog_arr);

    return (
        <div>
            <h1>강아지</h1>
            {dog.map((dogName, index) => {
                    return (
                    <p key={index}>{dogName}</p>
                    );
                })
            }
        </div>
    );
};

const Cat = () => {

    const cat = useSelector((state) => state.cat.cat_arr);

    return (
        <div>
            <h1>강아지</h1>
            {cat.map((catName, index) => {
                    return (
                    <p key={-index}>{catName}</p>
                    );
                })
            }
        </div>
    );
};


const Home = () => {
    
    const dispatch = useDispatch();

    return (
        <div>
            <h1>홈</h1>
            <button onClick={() => {
                dispatch(
                    addDog("뽀삐2")
                );
            }}>강아지 추가</button>

            <button onClick={() => {
                dispatch(
                    addCat("펄이2")
                );
            }}>고양이 추가</button>
        </div>
    );
};

export {Cat, Dog, Home};

