import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { articles } from "./articles/index";
import { formData } from "./formData/index";

const rootReducer = combineReducers({
    articles,
    formData,
    form: formReducer
});
export default rootReducer;
