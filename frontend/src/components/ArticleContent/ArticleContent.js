import React, {Component} from 'react';
import './ArticleContent.scss';

class ArticleContent extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="article-content">
        <input type="text" value={this.props.articleTitle} />
        <ul>
          <li>Save</li>
          <li>Post</li>
        </ul>
        <textarea value={this.props.children} />
      </div>
    );
  }
}

export default ArticleContent;
