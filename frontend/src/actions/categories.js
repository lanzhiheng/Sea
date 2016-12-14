import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../constants/ActionTypes';
import { CONFIG_API } from '../config/api';


export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES,
  };
};

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  };
};

const fetchCategoriesUtil = () => {
  return dispatch => {
    dispatch(requestCategories());
    return fetch(`http://127.0.0.1:8000/api/${CONFIG_API.categories}`, {
      mode: 'cors'
    }).then(response => response.json()).then(
      (json) => {
        dispatch(receiveCategories(json.data));
        return json;
      }
    );
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    return dispatch(fetchCategoriesUtil());
  };
};
