import { INCREMENT,DECREMENT } from "../constant.js";
//定义初始state
const initState = 0;
function countReducer(previousState = initState, action) {
    const { type, data } = action;
    let state;
    switch (type) {
        //加法
        case INCREMENT:
            state = previousState + data;
            break;
        //减法
        case DECREMENT:
            state = previousState - data;
            break;
        //初始化state
        default:
            state = previousState;
            break;
    };
    return state;
};

export default countReducer;