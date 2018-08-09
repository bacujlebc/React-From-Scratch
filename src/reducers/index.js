import { combineReducers } from "redux";
import articleReducer from "./article";
import articlesReducer from "./articles/index";

const rootReducer = combineReducers({
    articles: articlesReducer
});
export default rootReducer;
