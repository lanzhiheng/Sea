import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories';
import { fetchArticlesByCategories, fetchArticleContent, saveArticle } from '../../actions/articles';
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
    dispatch(fetchCategories()).then((json) => {
      const firstCategory = json.data[0];
      dispatch(fetchArticlesByCategories(firstCategory)).then((json) => {
        const firstArticle = json.data[0];
        // dispatch(fetchArticleContent(firstArticle._id));
      });
    });
  }

  onCategoryClick = (e) => {
    const {dispatch} = this.props;
    const targetCategory = e.target;
    const selectCategory = targetCategory.innerHTML;
    dispatch(fetchArticlesByCategories(selectCategory)).then((json) => {
      let firstArticleId = json.data[0]['_id'];
      dispatch(fetchArticleContent(firstArticleId));
    });

    let activeComponent = document.getElementsByClassName('categories')[0].getElementsByClassName('active')[0];
    activeComponent.className = activeComponent.className.split(/\s+/).filter((x) => {return x !== 'active';}).join(' ');
    let categoryClassName = targetCategory.className;
    targetCategory.className = categoryClassName + ' active';
  }

  onArticleClick = (e, key) => {
    const {dispatch} = this.props;
    const targetArticle = e.target;
    dispatch(fetchArticleContent(key));

    let activeComponent = document.getElementsByClassName('articles')[0].getElementsByClassName('active')[0];
    activeComponent.className = activeComponent.className.split(/\s+/).filter((x) => {return x !== 'active';}).join(' ');
    let articleClassName = targetArticle.className;
    targetArticle.className = articleClassName + ' active';
  }

  onArticleSave = (article) => {
    const {dispatch} = this.props;
    dispatch(saveArticle(article));
  }

  render() {
    const {categories, articles, article} = this.props;
    return (
      <div>
        <CategoriesList onCategoryClick={this.onCategoryClick} categories={categories}></CategoriesList>
        <ArticleList onArticleClick={this.onArticleClick} articles={articles}></ArticleList>
        <ArticleContent
          onArticleSave={this.onArticleSave}
          articleTitle={article.title}
          >
          {article.body}
        </ArticleContent>
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
