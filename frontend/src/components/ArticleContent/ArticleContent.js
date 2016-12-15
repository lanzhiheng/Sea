import React, {Component} from 'react';
import './ArticleContent.scss';

class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.articleTitle
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.children
    });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return(
      <div className="article-content">
        <input type="text" value={this.props.articleTitle} />
        <ul>
          <li>Save</li>
          <li>Post</li>
        </ul>

        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>

      </div>
    );
  }
}

export default ArticleContent;
