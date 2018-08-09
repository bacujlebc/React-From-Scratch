import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { BrowserRouter, browserHistory } from "react-router-dom";

import rootReducer from "./reducers/index";
import App from "./components/App";
import "./helpers.scss";

const store = createStore(rootReducer, applyMiddleware(logger));

const Component = () => (
    <BrowserRouter history={browserHistory}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Component />, document.getElementById("root"));
