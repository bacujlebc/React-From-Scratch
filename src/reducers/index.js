import { combineReducers } from "redux";
import { articles } from "./articles/index";

const rootReducer = combineReducers({
    articles
});
export default rootReducer;
