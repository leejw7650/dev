import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name: 'detail',
    initialState: {detail_arr: {}},
    reducers: {
        addDetail: (state, action) => {
            state.detail_arr[action.payload.idx] = {'detail' : action.payload.detail, isComplete : false};
        },
        editDetail: (state, action) => {
            state.detail_arr[action.payload.idx].detail = action.payload.detail;
        },
        deleteDetail: (state, action) => {
            delete state.detail_arr[action.payload.idx];
        },
        completeDetail: (state, action) => {
            state.detail_arr[action.payload.idx].isComplete = !state.detail_arr[action.payload.idx].isComplete;
        }
    }
});

export const {addDetail, editDetail, deleteDetail, completeDetail} = detailSlice.actions;
export default detailSlice.reducer;
