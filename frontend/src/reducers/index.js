import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_ARTICLES_BY_CATEGORIES,
  RECEIVE_ARTICLES_BY_CATEGORIES
} from '../constants/ActionTypes';

const initialState = {
  categories: [],
  article: []
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
  default:
    return state;
  }
}
