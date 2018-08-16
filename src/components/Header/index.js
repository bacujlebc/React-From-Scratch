import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
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
};

const LogOut = ({ loggedInAs, logout }) => {
    return (
        <React.Fragment>
            {loggedInAs ? (
                <React.Fragment>
                    <i
                        className="fas fa-sign-out-alt logout"
                        onClick={() => logout()}
                    />
                </React.Fragment>
            ) : (
                undefined
            )}
        </React.Fragment>
    );
};

export default Header;
