import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_POST_CATEGORIES,
  SUCCESS_POST_CATEGORIES
} from '../constants/ActionTypes';
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


export const requestNewCategorie = () => {
  return {
    type: REQUEST_POST_CATEGORIES,
  };
};

export const successNewCategorie = () => {
  return {
    type: SUCCESS_POST_CATEGORIES,
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


export const newCategorie = (categoryName) => {
  return dispatch => {
    dispatch(requestNewCategorie());
    return fetch(`http://127.0.0.1:8000/api/${CONFIG_API.categories}`, {
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'category': categoryName
      })
    }).then((json) =>{
      dispatch(successNewCategorie());
      return json;
    });
  };
};
