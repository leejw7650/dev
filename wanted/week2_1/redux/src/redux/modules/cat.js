import {createSlice} from '@reduxjs/toolkit'

// cat 이라는 모듈을 만들고 거기에다가 값은 이거야, 이거는 이렇게 바꾸고 싶어!

// 값은 이거야!


export const initialState = {
    cat_arr : [],
};

const catSlice = () => createSlice({
    name : "CAT",
    initialState,
    reducers: {
        addCat: (state, action) => {

            console.log(action);
            // state.cat_arr.push();
        }
    }

})

// 값이 있으면 이값을 바꿀 수 있는 무언가도 있어야 한다.

// action을 만들어야 해

// action을 만들 때에는 두 개가 필요해
// action type : 이건 뭔지 알려주는 것
// 이 액션이 일어나면 값이 어떻게 바뀌어야 함.

export const getCatArr = (cat) => {
    return {
        type : "GET",
        cat : cat,
    }
};

export const addCat = (cat) => {
    return {
        type : "ADD",
        cat : cat,
    }
};

export default function reducer(state = initialState, action = {}) {
    // 각각 어떤 일이 일어나는지 알려줘야 함.
    switch (action.type) {

        case "GET" :
            // 어떤 일이 일어나야 해.
            // 내가 가진 상태값 그대로 돌려줄게
            return state;
        case "ADD" :
            // 어떤 일이 일어나야 해.
            console.log(state)
            console.log(action)
            return {...state, cat_arr: [...state.cat_arr, action.cat]};
        default:
            return state;
    }
    // return state;
};