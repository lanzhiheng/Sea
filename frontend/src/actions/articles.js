import { REQUEST_ARTICLES_BY_CATEGORIES, RECEIVE_ARTICLES_BY_CATEGORIES } from '../constants/ActionTypes';
import { CONFIG_API } from '../config/api';


export const requestArticlesByCategory = () => {
  return {
    type: REQUEST_ARTICLES_BY_CATEGORIES,
  };
};

export const receiveArticlesByCategories = (articles) => {
  return {
    type: RECEIVE_ARTICLES_BY_CATEGORIES,
    articles
  };
};


const fetchArticlesByCategoriesUtil = (category) => {
  return dispatch => {
    dispatch(requestArticlesByCategory());
    return fetch(`http://127.0.0.1:8000/api/${CONFIG_API.categories}/${category}/articles`, {
      mode: 'cors'
    }).then(response => response.json()).then(
      (json) => {
        dispatch(receiveArticlesByCategories(json.data));
      }
    );
  };
};

export const fetchArticlesByCategories = (category) => {
  return (dispatch) => {
    return dispatch(fetchArticlesByCategoriesUtil(category));
  };
};
