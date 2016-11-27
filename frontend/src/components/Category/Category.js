import React, {Component} from 'react';
import './Category.scss'


class Category extends Component {
  constructor() {
    super();
    this.category = null;
  }

  render() {
    const {onCategoryClick, isActive} = this.props;
    let className = isActive ? "category-item active" : "category-item"

    return (
      <li ref={(target) => {this.category = target}} onClick={() => {onCategoryClick(this.category);}} className={className} >
      {this.props.children}
      </li>
    );
  }
}

export default Category;
