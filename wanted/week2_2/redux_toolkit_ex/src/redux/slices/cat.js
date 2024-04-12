import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: 'cat',
    initialState: {cat_arr: ['펄이', '루비']},
    reducers: {
        addCat: (state, action) => {
            state.cat_arr.push(action.payload); 
        },
    },
});

export const {addCat} = catSlice.actions;
export default catSlice.reducer;