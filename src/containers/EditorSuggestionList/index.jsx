import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { fetchArticles } from '../../api/article-service';
import './styles.scss';
import EditorSuggestion from '../../components/EditorSuggestion';

class EditorSuggestionList extends Component {
    componentDidMount() {
        this.props.articleList.length <= 0 && this.props.getArticles();
    }

    render() {
        const { articleList } = this.props || [];
        return (
            <div
                className={classnames(
                    `d-flex flex-column justify-content-center`
                )}
            >
                {articleList.length > 0 &&
                    articleList.map(el => (
                        <EditorSuggestion {...el} key={el.id} />
                    ))}
            </div>
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
)(EditorSuggestionList);
