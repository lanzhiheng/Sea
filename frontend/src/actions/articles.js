import {
  REQUEST_ARTICLES_BY_CATEGORIES,
  RECEIVE_ARTICLES_BY_CATEGORIES,
  REQUEST_ARTICLE_CONTENT,
  RECEIVE_ARTICLE_CONTENT,
  REQUEST_SAVE_ARTICLE,
  RECEIVE_SAVE_ARTICLE
} from '../constants/ActionTypes';
import { CONFIG_API } from '../config/api';
import _ from 'lodash';


export const requestArticlesByCategory = () => {
  return {
    type: REQUEST_ARTICLES_BY_CATEGORIES
  };
};

export const receiveArticlesByCategories = (articles) => {
  return {
    type: RECEIVE_ARTICLES_BY_CATEGORIES,
    articles
  };
};

export const requestArticleContent = () => {
  return {
    type: REQUEST_ARTICLE_CONTENT
  };
};

export const receiveArticleContent = (article) => {
  return {
    type: RECEIVE_ARTICLE_CONTENT,
    article: article
  };
};


export const requestSaveArticle = () => {
  return {
    type: REQUEST_SAVE_ARTICLE
  };
};


export const receiveSaveArticle = () => {
  return {
    type: RECEIVE_SAVE_ARTICLE
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
        return json;
      }
    );
  };
};

export const fetchArticlesByCategories = (category) => {
  return (dispatch) => {
    return dispatch(fetchArticlesByCategoriesUtil(category));
  };
};

const fetchArticleContentUtil = (articleId) => {
  return dispatch => {
    dispatch(requestArticleContent());
    return fetch(`http://127.0.0.1:8000/api/${CONFIG_API.articles}/${articleId}`, {
      mode: 'cors'
    }).then(response => response.json()).then(
      (json) => {
        dispatch(receiveArticleContent(json.data[0]));
      }
    );
  };
};

export const fetchArticleContent = (articleId) => {
  return (dispatch) => {
    return dispatch(fetchArticleContentUtil(articleId));
  };
};

const saveArticleUtil = (article) => {
  // const form = new FormData();
  // const headers = new Headers();
  // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  // headers.append('Accept', 'application/json, application/xml, text/plain, text/html, *.*');

  // _.forEach(article, (value, key) => {
  //   form.append(key, value);
  // });

  const options = {
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: JSON.stringify(article),
  };

  return dispatch => {
    dispatch(requestSaveArticle());
    return fetch(`http://127.0.0.1:8000/api/${CONFIG_API.articles}/`, options)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveSaveArticle(json.status));
    });
  };
};

export const saveArticle = (article) => {
  return (dispatch) => {
    return dispatch(saveArticleUtil(article));
  };
};
