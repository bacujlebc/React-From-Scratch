import React, { Component } from "react";
import classnames from "classnames";
import lodash from "lodash";

import "./styles.scss";
import { fetchArticleList } from "../../api/article-service";
import { UserSuggestion } from "../../components/UserSuggestion";

export default class UserSuggestionList extends Component {
    state = {
        articleList: []
    };

    componentDidMount() {
        fetchArticleList().then(artciles =>
            this.setState({ articleList: artciles })
        );
    }

    render() {
        const { articleList } = this.state;
        return (
            <div
                className={classnames(
                    `d-flex flex-column justify-content-center`
                )}
            >
                {articleList.length > 0 &&
                    articleList.map((el, i) => (
                        <UserSuggestion {...el} key={el.id} />
                    ))}
            </div>
        );
    }
}
