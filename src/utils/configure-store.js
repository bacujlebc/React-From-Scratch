import history from './configure-history';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), logger))
);

export default store;
