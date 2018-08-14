import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./reducers/index";
import App from "./components/App";
import Login from "./components/Login";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(logger))
);

const Component = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        </Router>
    </Provider>
);

ReactDOM.render(<Component />, document.getElementById("root"));
