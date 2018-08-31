import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Button from '../../components/Button/index';

const Topic = props => (
	<React.Fragment>
		<Layout>
			<Link to="/offer-list">
				<Button name="Offers" className="le-button" />
			</Link>
		</Layout>
	</React.Fragment>
);

export default Topic;
