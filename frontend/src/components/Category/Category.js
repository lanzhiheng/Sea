import React, {Component} from 'react';
import './Category.scss'


class Category extends Component {
  constructor() {
    super();
    this.category = null;
  }

  render() {
    const {onCategoryClick} = this.props;

    return (
      <li ref={(target) => {this.category = target}} onClick={() => {onCategoryClick(this.category);}} className="category-item" >
      {this.props.children}
      </li>
    );
  }
}

export default Category;
