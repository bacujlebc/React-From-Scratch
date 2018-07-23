import { articles } from "../data/article-json";

export const fetchArticleList = _ => {
    return new Promise((resolve, reject) => {
        resolve(articles);
    });
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
