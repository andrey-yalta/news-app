import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import newsReducer from "./news-reducer";



let reducers = combineReducers({
    news: newsReducer,

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;