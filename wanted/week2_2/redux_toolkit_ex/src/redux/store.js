import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import dog from './slices/dog';
import cat from './slices/cat';

const rootReducer = combineReducers({
    dog: dog,
    cat: cat,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store;