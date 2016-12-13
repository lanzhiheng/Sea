import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories';
import { fetchArticlesByCategories } from '../../actions/articles';
import './Panel.scss';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

class Panel extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchCategories());
    dispatch(fetchArticlesByCategories('123'));
  }

  render() {
    const {categories, articles} = this.props;
    return (
      <div>
        <CategoriesList categories={categories}></CategoriesList>
        <ArticleList articles={articles}></ArticleList>
        <ArticleContent></ArticleContent>
      </div>
    );
  }
}

const mapStateToProps = ({categories, articles}) => {
  return {
    categories,
    articles
  };
};

export default connect(mapStateToProps)(Panel);
