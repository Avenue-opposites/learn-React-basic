import { legacy_createStore as createStore,applyMiddleware } from "redux";
import countReducer from "./reducers/Count_reducer";
//使用中间件
import thunk from "redux-thunk";
const store = createStore(countReducer,applyMiddleware(thunk));

export default store;