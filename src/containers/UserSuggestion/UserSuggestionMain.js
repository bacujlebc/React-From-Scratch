import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserSuggestionList from './UserSuggestionList';
import Topic from './Topic';
import {
    getArticles,
    addArticle,
    deleteArticle,
    approveNewTitle,
    like
} from '../../actions/articles';
import { connect } from 'react-redux';

class UserSuggestionMain extends Component {
    static propTypes = {
        fetchArticles: PropTypes.func.isRequired,
        match: PropTypes.any
    };

    componentDidMount() {
        setTimeout(_ => {
            this.props.fetchArticles();
        }, 2000);
    }

    render() {
        console.log(this.props.match.url);
        return (
            <React.Fragment>
                <UserSuggestionList {...this.props} />

                <Route
                    path={`${this.props.match.url}/:topicId`}
                    component={Topic}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: _ => dispatch(getArticles()),

        addArticle: _ => dispatch(addArticle()),

        deleteArticle: index => dispatch(deleteArticle(index)),

        approveNewTitle: title => dispatch(approveNewTitle(title)),

        likeArticle: id => dispatch(like(id)),

        openArticle: id => dispatch(push(`/${id}`))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSuggestionMain);
