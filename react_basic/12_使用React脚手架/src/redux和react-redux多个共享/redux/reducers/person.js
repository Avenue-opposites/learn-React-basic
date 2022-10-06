import { ADD_PERSON } from "../constant";

const initState = [];
function personReducer(previousState,action) {
    const { type,data } = action;
    let state;
    switch (type) {
        case ADD_PERSON:
            state = [data,...previousState];
            break;
    
        default:
            state = initState;
            break;
    };
    return state;
};

export default personReducer;