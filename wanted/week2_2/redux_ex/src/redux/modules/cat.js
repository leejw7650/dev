// cat 모듈 작성

// 값
const initialState = {
    cat_arr: ["펄이", "루비"],
};

// 값을 바꾸게 해주는 것 -> reducer
// 값을 바꾸는 행위 -> action

const ADD = 'cat/ADD'; // action type

const addCat = (cat_name) => { // action constructing function
    return ({
        type: ADD,
        cat: cat_name,
    });
};

// redux는 리듀서를 만들 때 arrow function 을 좋아하지 않음.
export default function (state=initialState, action) {
    if (action.type === 'cat/ADD') {
        return ({cat_arr: [...state.cat_arr, action.cat]})
    };
    return state;
};

export {addCat};