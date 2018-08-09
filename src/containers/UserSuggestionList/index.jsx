import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import UserSuggestion from "../../components/UserSuggestion";
import { fetchArticles } from "../../api/article-service";
import "./styles.scss";

class UserSuggestionList extends Component {
    componentDidMount() {
        this.props.articleList.length <= 0 && this.props.getArticles();
    }

    render() {
        const path = this.props.match.path && this.props.match.path.slice(1);
        const { articleList } = this.props || [];
        return (
            <div
                className={classnames(
                    `d-flex flex-column justify-content-center`
                )}
            >
                {articleList.length > 0 &&
                    articleList.map(el => (
                        <UserSuggestion {...el} key={el.id} currPage={path} />
                    ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    debugger;
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
)(UserSuggestionList);
