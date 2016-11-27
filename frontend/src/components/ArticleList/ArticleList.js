import React, {Component} from 'react';
import './ArticleList.scss'
import Article from '../Article/Article';

class ArticleList extends Component {
  constructor() {
    super();
  }

  onArticleClick(targetArticle) {
    let activeComponent = document.getElementsByClassName('articles')[0].getElementsByClassName('active')[0];
    activeComponent.className = activeComponent.className.split(/\s+/).filter((x) => {return x !== 'active'}).join(' ');
    let articleClassName = targetArticle.className;
    targetArticle.className = articleClassName + " active";
  }


  render() {
    const {articles} = this.props;

    return (
      <div className='articles'>
        <div className='articles-add'>
          <a href="#">New Article</a>
        </div>
        <ul>
          {articles.map((x, index) => {
            if (index == 0) {
               return (<Article key={index} isActive={true} onArticleClick={this.onArticleClick}>{x}</Article>);
            } else {
              return (<Article key={index} onArticleClick={this.onArticleClick}>{x}</Article>);
            }

          })}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
