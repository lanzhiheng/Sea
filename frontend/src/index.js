import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesList from './components/CategoriesList/CategoriesList';
import './index.css';

const categories = [
  'JavaScript',
  'React',
  'Ruby',
  'Redux'
];


ReactDOM.render(
  <div>
    <CategoriesList categories={categories}></CategoriesList>
  </div>,
  document.getElementById('root')
);
