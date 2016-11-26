import React, {Component} from 'react';
import './Article.scss'


class Article extends Component {
  constructor() {
    super();
    this.article = null;
  }

  render() {
    const {onArticleClick} = this.props;

    return (
      <li ref={(target) => {this.article = target}} onClick={() => {onArticleClick(this.article);}} className="article-item" >
      {this.props.children}
      </li>
    );
  }
}

export default Article;
