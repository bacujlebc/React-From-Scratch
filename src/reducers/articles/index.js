import {
    GET_ARTICLES,
    ADD_ARTICLE,
    DELETE_ARTICLE
} from "../../actions/articles";

import { articleData } from "../../data/article-json";

export const articles = (state = [], action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return [...state, ...articleData];
        case ADD_ARTICLE:
            return [
                ...state,
                {
                    id:
                        state.length > 0
                            ? Math.max(...state.map(el => el.id)) + 1
                            : 1,
                    originalText: "Test article.",
                    suggestions: [],
                    isApproved: false
                }
            ];
        case DELETE_ARTICLE:
            return state.slice(0, action.id).concat(state.slice(action.id + 1));
        default:
            return state;
    }
};
