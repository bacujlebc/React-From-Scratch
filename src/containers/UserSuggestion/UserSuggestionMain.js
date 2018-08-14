import React, { Component } from "react";
import PropTypes from "prop-types";
import UserSuggestionList from "./UserSuggestionList";
import {
    getArticles,
    addArticle,
    deleteArticle,
    approveNewTitle,
    like
} from "../../actions/articles";
import { connect } from "react-redux";

class UserSuggestionMain extends Component {
    static propTypes = {
        fetchArticles: PropTypes.func.isRequired
    };

    componentDidMount() {
        setTimeout(_ => {
            this.props.fetchArticles();
        }, 2000);
    }

    render() {
        const { articles } = this.props;

        return (
            <UserSuggestionList
                articleList={articles || []}
                addArticle={this.props.addArticle}
                deleteArticle={this.props.deleteArticle}
                approveNewTitle={this.props.approveNewTitle}
                likeArticle={this.props.likeArticle}
            />
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

        likeArticle: id => dispatch(like(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSuggestionMain);
