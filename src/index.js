import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store from './utils/configure-store';
import history from './utils/configure-history';
import registerServiceWorker from './utils/registerServiceWorker';

import Root from './root';

const appEl = document.getElementById('root');
unmountComponentAtNode(appEl);

renderApplication();

function renderApplication() {
	ReactDOM.render(
		<AppContainer>
			<Root store={store} history={history} />
		</AppContainer>,
		appEl
	);
}

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./root', () => {
		const NextRoot = require('./root').default;

		ReactDOM.render(
			<AppContainer>
				<NextRoot store={store} history={history} />
			</AppContainer>,
			appEl
		);
	});
}

registerServiceWorker();
