import React, { Component } from "react";
import UserSuggestionList from "./UserSuggestionList";
import { getArticles } from "../../actions/articles";
import { connect } from "react-redux";

class UserSuggestionMain extends Component {
    componentDidMount() {
        setTimeout(_ => {
            this.props.fetchArticles();
        }, 2000);
    }

    render() {
        const { articles } = this.props;

        return <UserSuggestionList articleList={articles || []} />;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: _ => dispatch(getArticles()),

        addArticle: _ => dispatch(addArticle()),

        deleteArticle: index => dispatch(deleteArticle(index)),

        approveNewTitle: title => dispatch(approveNewTitle(title)),

        like: id => dispatch(like(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSuggestionMain);
