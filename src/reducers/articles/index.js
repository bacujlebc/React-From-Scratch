import { GET_ARTICLES, SEND_ARTICLE_SUGGESTION } from "./constrants";

export default function articlesReducer(state = [], action) {
    switch (action.type) {
        case GET_ARTICLES:
            return [...state, ...action.payload];
        case SEND_ARTICLE_SUGGESTION:
            return state.map(el => {
                if (el.id !== action.payload.id) {
                    return el;
                }

                return {
                    ...el,
                    suggestions: [...el.suggestions, action.payload.text]
                };
            });
        default:
            return state;
    }
}

// import { GET_ARTICLES, SEND_ARTICLE_SUGGESTION } from "./constrants";
// import articleReducer from "../article/index";

// export default function articlesReducer(state = [], action) {
//     switch (action.type) {
//         case GET_ARTICLES:
//             // return [...state, ...action.payload];
//             return [
//                 ...state,
//                 ...action.payload.map(el =>
//                     articleReducer(undefined, { ...el, type: "FETCH_ARTICLE" })
//                 )
//             ];
//         case SEND_ARTICLE_SUGGESTION:
//             return state.map(el => {
//                 if (el.id !== action.payload.id) {
//                     return el;
//                 }

//                 const buff = Object.assign({}, el);

//                 return Object.assign({}, el, {
//                     suggestions: buff.suggestions.push(action.payload.text)
//                 });
//             });
//         default:
//             return state;
//     }
// }
