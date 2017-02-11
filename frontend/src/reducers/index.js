import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_ARTICLES_BY_CATEGORIES,
  RECEIVE_ARTICLES_BY_CATEGORIES,
  REQUEST_ARTICLE_CONTENT,
  RECEIVE_ARTICLE_CONTENT,
  REQUEST_POST_CATEGORIES,
  SUCCESS_POST_CATEGORIES
} from '../constants/ActionTypes';

const initialState = {
  categories: [],
  articles: [],
  article: {}
};

export default function seaApp(state=initialState, action) {
  switch (action.type) {
  case REQUEST_CATEGORIES:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case RECEIVE_CATEGORIES:
    return Object.assign({}, state, {
      isFetching: false,
      categories: action.categories
    });
  case REQUEST_ARTICLES_BY_CATEGORIES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_ARTICLES_BY_CATEGORIES:
    return Object.assign({}, state, {
      isFetching: false,
      articles: action.articles
    });
  case REQUEST_ARTICLE_CONTENT:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_ARTICLE_CONTENT:
    return Object.assign({}, state, {
      isFetching: false,
      article: action.article
    });
  case REQUEST_POST_CATEGORIES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case SUCCESS_POST_CATEGORIES:
    return Object.assign({}, state, {
      isFetching: false
    });
  default:
    return state;
  }
}
