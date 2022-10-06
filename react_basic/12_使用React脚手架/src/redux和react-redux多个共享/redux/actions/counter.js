import { INCREMENT, DECREMENT } from "../constant.js";
const increment = data => ({
    type: INCREMENT,
    data
});
const decrement = data => ({
    type: DECREMENT,
    data
});
//异步行为
const incrementAsync = (data, time) => {
    return dispatch => {
        //延时调用
        setTimeout(() => {
            //创建同步行为
            dispatch(increment(data));
        }, time);
    };
};
export {
    increment,
    decrement,
    incrementAsync
};