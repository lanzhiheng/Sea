import React, {Component} from 'react';
import './CategoriesList.scss';
import Category from '../Category/Category';


class CategoriesList extends Component {
  constructor() {
    super();
  }

  onCategoryClick(targetCategory) {
    let activeComponent = document.getElementsByClassName('categories')[0].getElementsByClassName('active')[0];
    activeComponent.className = activeComponent.className.split(/\s+/).filter((x) => {return x !== 'active'}).join(' ');
    let categoryClassName = targetCategory.className;
    targetCategory.className = categoryClassName + " active";
  }

  render() {
    return(
      <div className="categories">
        <div className="categories-add">
          <a href="#">New Category</a>
        </div>
        <ul>
          {this.props.categories && this.props.categories.map((x, index) => {
            if (index == 0) {
              return (<Category key={index} isActive={true} onCategoryClick={this.onCategoryClick}>{x}</Category>);
            } else {
              return (<Category key={index} onCategoryClick={this.onCategoryClick}>{x}</Category>);
            }

          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
