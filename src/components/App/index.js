import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import UserSuggestionMain from '../../containers/UserSuggestion';
import Header from '../Header';

import { logout } from '../../actions/auth';
import { clearData } from '../../actions/formData';

import './index.scss';

class App extends Component {
  componentWillMount() {
    const { loggedInAs, logoutFunc, clearDataFunc } = this.props;
    if (!loggedInAs) {
      clearDataFunc();
      logoutFunc();
    }
  }

  render() {
    const { isAuthenticated, loggedInAs, logoutFunc, redirect } = this.props;

    const toRender = isAuthenticated ? (
      <React.Fragment>
        <Header loggedInAs={loggedInAs} logout={logoutFunc} />

        <div className="container">
          <UserSuggestionMain {...this.props} />
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className="not-authorized">
          <h3>You must log in to view this page.</h3>
          <button type="button" className="btn btn-warning" onClick={redirect}>
            Log in
          </button>
        </div>
      </React.Fragment>
    );

    return <React.Fragment>{toRender}</React.Fragment>;
  }
}

export default connect(
  state => ({
    state,
    loggedInAs: state.auth.username,
    isAuthenticated: !!localStorage.getItem('username')
  }),

  dispatch => ({
    redirect: () => dispatch(push('/login')),
    logoutFunc: () => dispatch(logout()),
    clearDataFunc: () => dispatch(clearData())
  })
)(App);
