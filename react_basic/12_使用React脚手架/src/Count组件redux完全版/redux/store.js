import { legacy_createStore as createStore } from "redux";
import countReducer from "./reducers/Count_reducer";
const store = createStore(countReducer);

export default store;