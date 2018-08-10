export const GET_ARTICLES = "GET_ARTICLES";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const ADD_LIKE = "ADD_LIKE";

export function getArticles() {
    return {
        type: GET_ARTICLES
    };
}

export function addArticle() {
    return {
        type: ADD_ARTICLE
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        id: id
    };
}

export function like(id) {
    return {
        type: ADD_LIKE,
        id: id
    };
}
