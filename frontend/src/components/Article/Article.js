import React, {Component} from 'react';
import './Article.scss';


class Article extends Component {
  constructor() {
    super();
    this.article = null;
  }

  render() {
    const { isActive } = this.props;
    let className = isActive ? 'article-item active' : 'article-item';

    return (
      <li onClick={(e) => this.props.onClick(e, this.props.id)} className={className} >
      {this.props.children}
      </li>
    );
  }
}

export default Article;
