import React, {Component} from 'react';
import './Article.scss'


class Article extends Component {
  constructor() {
    super();
    this.article = null;
  }

  render() {
    const {onArticleClick, isActive} = this.props;
    let className = isActive ? "article-item active" : "article-item"

    return (
      <li ref={(target) => {this.article = target}} onClick={() => {onArticleClick(this.article);}} className={className} >
      {this.props.children}
      </li>
    );
  }
}

export default Article;
