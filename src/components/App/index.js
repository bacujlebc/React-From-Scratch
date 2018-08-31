import React, { Component, Fragment } from 'react';

import './index.scss';

class App extends Component {
	render() {
		const { children } = this.props;
		return <Fragment>{children}</Fragment>;
	}
}

export default App;
