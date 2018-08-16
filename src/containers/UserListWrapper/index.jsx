import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { participants } from '../../data/participant-json';
import { UserList } from './UserList/index';

class UserListWrapper extends Component {
    state = {
        userList: []
    };

    componentDidMount() {
        this.setState(prevState => {
            return {
                userList: [...prevState.userList, ...participants]
            };
        });
    }

    render() {
        return (
            <Fragment>
                <UserList users={this.state.userList || []} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        articleList: state.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArticles: () => {
            fetchArticles()(dispatch);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListWrapper);
