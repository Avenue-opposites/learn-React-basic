import { combineReducers } from "redux";
import countReducer from "./reducers/counter";
import personReducer from "./reducers/person";

//整合所有的reducer
export default combineReducers({
    //定义state的值
    n:countReducer,
    personList:personReducer
});
