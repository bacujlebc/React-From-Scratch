import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import './styles.scss';

class NoMatch extends PureComponent {
    render() {
        console.log(this.props);
        return (
            <div className="page-not-found-wrapper">
                <p>404</p>
                <hr />
                <h3>
                    Please, follow{' '}
                    <a href="" onClick={this.props.toLoginPage}>
                        this
                    </a>{' '}
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
