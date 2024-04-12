import {createStore, combineReducers} from "redux";

import cat from "./modules/cat";
import dog from "./slices/dog";

const rootReducer = combineReducers({
    cat: cat, 
    dog,
});

const store = createStore(rootReducer);

const enhancer = window.__Redux

// const store = createStore(['값을 넣어줘'], ['미들웨어 자리']);


export default store;