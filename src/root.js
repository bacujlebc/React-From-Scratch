import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home/index';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Topic from './containers/UserSuggestion/Topic';
import UserSuggestionMain from './containers/UserSuggestion';

export default class Root extends React.Component {
	static propTypes = {
		history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
		store: PropTypes.object // eslint-disable-line react/forbid-prop-types
	};

	render() {
		const { store, history } = this.props;

		return (
			<Provider store={store}>
				<Router history={history}>
					<App>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/offer-list/:id" component={Topic} />
							<Route path="/offer-list" component={UserSuggestionMain} />
							<Route component={NoMatch} />
						</Switch>
					</App>
				</Router>
			</Provider>
		);
	}
}
