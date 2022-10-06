import { INCREMENT, DECREMENT } from "../constant.js";
const createIncrementAction = data => ({
    type: INCREMENT,
    data
});
const createDecrementAction = data => ({
    type: DECREMENT,
    data
});
//异步行为
const createIncrementAsyncAction = (data, time) => {
    return dispatch => {
        //延时调用
        setTimeout(() => {
            //创建同步行为
            dispatch(createIncrementAction(data));
        }, time);
    };
};
export {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
};