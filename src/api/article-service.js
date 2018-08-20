import { getArticles } from '../actions/articles';
import articleData from '../data/article-json';

export const fetchArticles = () => dispatch =>
  new Promise(() => {
    dispatch(getArticles(articleData));
  });

export const fetchArticleById = articleId =>
  new Promise(resolve => {
    fetch(`https://dagblader.no/article/${articleId}`)
      .then(() =>
        resolve({
          originalText: 'It was amazing way. Sun was shining brightly.',
          suggestions: []
        })
      )
      .catch(e => e);
  });
