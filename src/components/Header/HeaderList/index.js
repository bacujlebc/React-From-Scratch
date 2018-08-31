import React from 'react';
import { Link } from 'react-router-dom';

import HeaderListItem from '../HeaderListItem';
import Logout from '../Logout';
import Button from '../../Button';

const HeaderList = props => (
	<ul className="header-list">
		<HeaderListItem>
			<Link to="/">
				<Button name="Home" className="le-button" />
			</Link>
		</HeaderListItem>
		<HeaderListItem>
			<Link to="/offer-list">
				<Button name="Offers" className="le-button" />
			</Link>
		</HeaderListItem>
		<HeaderListItem>
			<Link to="/login">
				<Button name="Login" className="le-button" />
			</Link>
		</HeaderListItem>
		<HeaderListItem>
			<Logout {...props} />
		</HeaderListItem>
	</ul>
);

export default HeaderList;
