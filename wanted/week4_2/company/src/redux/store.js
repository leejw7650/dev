import { configureStore, combineReducers } from "@reduxjs/toolkit";
import exchange from "./slices/exchange";

const rootReducer = combineReducers({
  exchange: exchange,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
