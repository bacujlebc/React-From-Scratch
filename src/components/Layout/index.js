import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss';

class Layout extends Component {
	render() {
		const { children } = this.props;

		return (
			<Fragment>
				<Header />
				<main className="container">{children}</main>
				<Footer />
			</Fragment>
		);
	}
}

export default Layout;
