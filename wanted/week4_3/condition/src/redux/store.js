import { configureStore, combineReducers } from "@reduxjs/toolkit";
import condition from "./slices/condition";

const rootReducer = combineReducers({
  condition: condition,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
