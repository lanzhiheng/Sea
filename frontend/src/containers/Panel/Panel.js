import React, {Component} from 'react';
import './Panel.scss'
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

require('es6-promise').polyfill();
require('isomorphic-fetch');

let categories = fetch('http://127.0.0.1:8000/api/categories', {
  mode: 'cors'
}).then((result) => {
  return result.json();
});

let articles = fetch('http://127.0.0.1:8000/api/articles', {
  mode: 'cors'
}).then((result) => {
  return result.json();
});

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      categories: []
    }
  }

  componentDidMount() {
    categories.then((result) => {
      this.setState({categories: result.data});
    });
    articles.then((result) => {
      this.setState({articles: result.data});
    });
  }

  render() {
    return (
      <div>
        <CategoriesList categories={this.state.categories}></CategoriesList>
        <ArticleList articles={this.state.articles}></ArticleList>
        <ArticleContent></ArticleContent>
      </div>
    );
  }
}

export default Panel;
