import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import './styles.scss';

class NoMatch extends PureComponent {
  render() {
    const { toLoginPage } = this.props;
    return (
      <div className="page-not-found-wrapper">
        <p>404</p>
        <hr />
        <h3>
          Please, follow{' '}
          <button type="button" onClick={toLoginPage}>
            this
          </button>{' '}
          link
        </h3>
      </div>
    );
  }
}

export default connect(
  state => state,
  { toLoginPage: () => push('/login') }
)(NoMatch);
