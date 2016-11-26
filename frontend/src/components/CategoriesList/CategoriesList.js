import React, {Component} from 'react';
import './CategoriesList.scss';
import Category from '../Category/Category';


class CategoriesList extends Component {
  constructor() {
    super();
  }

  onCategoryClick(targetCategory) {
    const categoryText = targetCategory.innerHTML;
    console.log(categoryText);
  }

  render() {
    const {categories} = this.props;
    return(
      <ul className="categories">
        {categories.map((x) => {
          return (<Category key={x} onCategoryClick={this.onCategoryClick}>{x}</Category>);
        })}
      </ul>
    );
  }
}

export default CategoriesList;
