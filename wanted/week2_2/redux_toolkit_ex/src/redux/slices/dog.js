import { createSlice } from "@reduxjs/toolkit";

const dogSlice = createSlice({
    name: 'dog',
    initialState: {dog_arr: ['바둑이', '뽀삐']},
    reducers: {
        addDog: (state, action) => {
            // 리덕스 툴킷에서는 immer 를 지원하기 때문에 아래와 같이 작성해도 원본 데이터를 수정하지 않는다.
            state.dog_arr.push(action.payload); 
            // state.dog_arr = [...state.dog_arr, action.dog_name];
        },
    },
});

export const {addDog} = dogSlice.actions;
export default dogSlice.reducer;