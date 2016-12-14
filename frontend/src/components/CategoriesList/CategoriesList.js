import React, {Component} from 'react';
import './CategoriesList.scss';
import Category from '../Category/Category';


class CategoriesList extends Component {
  constructor() {
    super();
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
              return (<Category key={index} isActive={true} onClick={this.props.onCategoryClick}>{x}</Category>);
            } else {
              return (<Category key={index} onClick={this.props.onCategoryClick}>{x}</Category>);
            }

          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
