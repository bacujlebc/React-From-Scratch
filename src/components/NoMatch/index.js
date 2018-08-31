import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/index';

const NoMatch = props => {
	return (
		<div className="page-not-found-wrapper">
			<p>404</p>
			<hr />
			<h3>
				Please, follow{' '}
				<Button className="btn btn-warning">
					<Link to="/login">this</Link>
				</Button>{' '}
				link
			</h3>
		</div>
	);
};

export default NoMatch;
