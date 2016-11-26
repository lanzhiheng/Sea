import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesList from './components/CategoriesList/CategoriesList';
import ArticleList from './components/ArticleList/ArticleList';
import './index.css';

const categories = [
  'JavaScript',
  'React',
  'Ruby',
  'Redux'
];

const articles = [
  'JavaScript Es6 ',
  'React and Redux',
  'Ruby or Python?'
];


ReactDOM.render(
  <div>
    <CategoriesList categories={categories}></CategoriesList>
    <ArticleList articles={articles}></ArticleList>
  </div>,
  document.getElementById('root')
);
