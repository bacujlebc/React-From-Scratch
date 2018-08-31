import React from 'react';

const Logout = ({ loggedInAs, logout }) => (
	<React.Fragment>
		{loggedInAs && (
			<React.Fragment>
				<i
					className="fas fa-sign-out-alt logout"
					onClick={logout}
					onKeyDown={() => {}}
					role="button"
					tabIndex={0}
				/>
			</React.Fragment>
		)}
	</React.Fragment>
);

export default Logout;
