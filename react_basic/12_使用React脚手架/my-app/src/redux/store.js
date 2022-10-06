import { legacy_createStore as createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
//使用中间件
import thunk from "redux-thunk";
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;