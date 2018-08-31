import React from 'react';

import HeaderList from './HeaderList';

const Header = props => (
	<header>
		<HeaderList {...props} />
	</header>
);

export default Header;
