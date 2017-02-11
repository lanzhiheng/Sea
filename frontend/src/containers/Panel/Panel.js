import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Panel.scss';
import CategoriesList from '../../containers/CategoriesList/CategoriesList';
import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

class Panel extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  // 暂时没用
  onArticlesClick = (e, key) => {
    // const {dispatch} = this.props;
    // const targetArticle = e.target;
    // dispatch(fetchArticleContent(key));
    //
    // let activeComponent = document.getElementsByClassName('articles')[0].getElementsByClassName('active')[0];
    // activeComponent.className = activeComponent.className.split(/\s+/).filter((x) => {return x !== 'active';}).join(' ');
    // let articleClassName = targetArticle.className;
    // targetArticle.className = articleClassName + ' active';
    return [0, key];
  }

  render() {
    const { articles, article} = this.props;
    return (
      <div>
        <CategoriesList onCategoryClick={this.onCategoryClick}></CategoriesList>
        <ArticleList onArticleClick={this.onArticleClick} articles={articles}></ArticleList>
        <ArticleContent articleTitle={article.title}>{article.body}</ArticleContent>
      </div>
    );
  }
}

const mapStateToProps = ({categories, articles, article}) => {
  return {
    categories,
    articles,
    article
  };
};

export default connect(mapStateToProps)(Panel);
