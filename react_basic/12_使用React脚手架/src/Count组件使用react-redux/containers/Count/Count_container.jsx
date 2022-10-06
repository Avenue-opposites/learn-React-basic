import CountUI from "../../components/Count/Count";
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/actions/Count_action";
import { connect } from "react-redux";

const container = connect(
    state => ({
        n:state
    }),
    (dispatch) => {
        return {
            add(data) {
               dispatch(createIncrementAction(data));
            },
            minus(data) {
                dispatch(createDecrementAction(data));
            },
            waitAdd(data,time) {
                dispatch(createIncrementAsyncAction(data,time));
            }
        }
    }
    )(CountUI);
export default container;