import React, {Component} from 'react';
import './ArticleContent.scss';


class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: '',
      articleContent: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      articleTitle: nextProps.articleTitle,
      articleContent: nextProps.children
    });
  }

  handleTitleChange = (event) => {
    this.setState({
      articleTitle: event.target.value
    });
  }

  handleArticleChange = (event) => {
    this.setState({
      articleContent: event.target.value
    });
  }

  onSave = () => {
    const title = this.state.articleTitle;
    const body = this.state.articleContent;
    // const category = document.querySelector('.category-item.active').innerHTML;
    const category = "lan";
    const {onArticleSave} = this.props;

    const article = {
      title,
      body,
      category
    };
    onArticleSave(article);
  }

  render() {
    return(
      <div className="article-content">
        <form>
          <input type="text" value={this.state.articleTitle} onChange={this.handleTitleChange} />
          <ul>
            <li onClick={this.onSave}>Save</li>
            <li onClick={this.onPost}>Post</li>
          </ul>

          <label>
            <textarea value={this.state.articleContent} onChange={this.handleArticleChange} />
          </label>
        </form>

      </div>
    );
  }
}

export default ArticleContent;
