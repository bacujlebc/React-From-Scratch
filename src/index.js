import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { logger } from "redux-logger";
import history from "./history";

import rootReducer from "./reducers/index";
import App from "./components/App";
import Login from "./components/Login";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), logger))
);
// const history = syncHistoryWithStore(createBrowserHistory(), store);

const Component = () => (
    <Provider store={store}>
        <Router history={history}>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
            </React.Fragment>
        </Router>
    </Provider>
);

ReactDOM.render(<Component />, document.getElementById("root"));
