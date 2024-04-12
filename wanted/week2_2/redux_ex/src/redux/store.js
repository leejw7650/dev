// 스토어는 전역 저장소를 의미, 값과 그 값을 바꿔주는 것(리듀서)으로 구성됨

import { createStore, combineReducers } from "redux";
import cat from './modules/cat'


// createStore('값을 바꿔주는 것', '중간처리자(미들웨어)')
// 스토어는 하나!
// 리듀서를 여러개 만들게 된다면 한개로 묶어야함.
// 미들웨어도 마찬가지!

const rootReducer = combineReducers({
    cat: cat,
});

const store = createStore(rootReducer);

export default store;


