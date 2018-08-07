import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./reducers/index";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(logger));

const Component = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Component />, document.getElementById("root"));
