import { configureStore, combineReducers} from '@reduxjs/toolkit';
import detail from './slices/detail';

const rootReducer = combineReducers({
    detail: detail,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;