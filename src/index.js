import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import store from './utils/configure-store';
import history from './utils/configure-history';
import registerServiceWorker from './utils/registerServiceWorker';

import App from './components/App';
import Login from './components/Login';
import NoMatch from './components/NoMatch';

const Component = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Component />, document.getElementById('root'));
registerServiceWorker();
