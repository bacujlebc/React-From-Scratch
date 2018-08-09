import { GET_ARTICLES } from "../../reducers/articles/constrants";
import { SEND_ARTICLE_SUGGESTION } from "../../reducers/articles/constrants";

export const getArticles = data => ({
    type: GET_ARTICLES,
    payload: data
});

export const sendArticleSuggestion = data => ({
    type: SEND_ARTICLE_SUGGESTION,
    payload: data
});
