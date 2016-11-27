import React, {Component} from 'react';
import './ArticleContent.scss';
import Category from '../Category/Category';

class ArticleContent extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="article-content">
        <input type="text"/>
        <ul>
          <li>Save</li>
          <li>Post</li>
        </ul>
        <textarea />
      </div>
    );
  }
}

export default ArticleContent;
