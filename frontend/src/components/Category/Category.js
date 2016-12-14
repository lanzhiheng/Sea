import React, {Component} from 'react';
import './Category.scss';


class Category extends Component {
  constructor() {
    super();
    this.category = null;
  }

  render() {
    const { isActive } = this.props;
    let className = isActive ? 'category-item active' : 'category-item';


    return (
      <li onClick={this.props.onClick} className={className} >
      {this.props.children}
      </li>
    );
  }
}

export default Category;
