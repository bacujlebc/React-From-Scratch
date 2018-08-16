import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import UserSuggestionMain from '../../containers/UserSuggestion';
import TodoWrapper from '../Todo';
import Header from '../Header';

import { logout } from '../../actions/auth';

import './index.scss';

class App extends Component {
    render() {
        const toRender = this.props.isAuthenticated ? (
            <React.Fragment>
                <Header
                    loggedInAs={this.props.loggedInAs}
                    logout={this.props.logout}
                />

                <div className="container">
                    {/* <TodoWrapper /> */}
                    <UserSuggestionMain {...this.props} />
                </div>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <div className="not-authorized">
                    <h3>You must log in to view this page.</h3>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.props.redirect}
                    >
                        Log in
                    </button>
                </div>
            </React.Fragment>
        );

        return <React.Fragment>{toRender}</React.Fragment>;
    }
}

export default connect(
    state => {
        return {
            state: state,
            loggedInAs: state.auth.username,
            isAuthenticated: localStorage.getItem('username')
        };
    },

    dispatch => {
        return {
            redirect: _ => dispatch(push('/login')),
            logout: _ => dispatch(logout())
        };
    }
)(App);
