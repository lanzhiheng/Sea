import React, {Component} from 'react';
import './ArticleList.scss'
import Article from '../Article/Article';

class ArticleList extends Component {
  constructor() {
    super();
  }

  onArticleClick(targetArticle) {
    const articleText = targetArticle.innerHTML;
    console.log(articleText);
  }


  render() {
    const {articles} = this.props;

    return (
      <ul className='articles'>
        {articles.map((x) => {
          return (<Article key={x} onArticleClick={this.onArticleClick}>{x}</Article>);
        })}
      </ul>
    );
  }
}

export default ArticleList;
