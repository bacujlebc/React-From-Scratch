import { getArticles } from "../actions/articles";
import { articles } from "../data/article-json";

export const fetchArticles = _ => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(getArticles(articles));
        });
    };
};

export const fetchArticleById = articleId => {
    return new Promise((resolve, reject) => {
        fetch(`https://dagblader.no/article/${articleId}`)
            .then(result =>
                resolve({
                    originalText:
                        "It was amazing way. Sun was shining brightly.",
                    suggestions: []
                })
            )
            .catch(e => e);
    });
};
