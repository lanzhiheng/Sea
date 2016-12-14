import React, {Component} from 'react';
import './ArticleList.scss';
import Article from '../Article/Article';

class ArticleList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='articles'>
        <div className='articles-add'>
          <a href="#">New Article</a>
        </div>
        <ul>
          {this.props.articles && this.props.articles.map((x, index) => {
            if (index == 0) {
              return (<Article key={x._id} isActive={true} id={x._id} onClick={this.props.onArticleClick}>{x.title}</Article>);
            } else {
              return (<Article key={x._id} id={x._id} onClick={this.props.onArticleClick}>{x.title}</Article>);
            }
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
