import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <header>
    <div className="d-flex">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <LogOut {...props} />
        </li>
      </ul>
    </div>
  </header>
);

const LogOut = ({ loggedInAs, logout }) => (
  <React.Fragment>
    {loggedInAs && (
      <React.Fragment>
        <i
          className="fas fa-sign-out-alt logout"
          onClick={() => logout()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        />
      </React.Fragment>
    )}
  </React.Fragment>
);

export default Header;
