import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import articles from './articles';
import formData from './formData';
import auth from './auth';

const rootReducer = combineReducers({
    articles,
    formData,
    auth,
    form: formReducer,
    routing: routerReducer
});
export default rootReducer;
