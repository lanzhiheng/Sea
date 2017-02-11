import React, {Component} from 'react';
import { connect } from 'react-redux';
import './CategoriesList.scss';
import { fetchCategories, newCategorie } from '../../actions/categories';
import Category from '../../components/Category/Category';
import { Input, Modal, Form, message } from 'antd';
const FormItem = Form.Item;

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchCategories());
  }

  onNewCategoryClick = () => {
    this.setState({showModal: true});
  }

  onModelCancel = () => {
    this.setState({showModal: false});
  }

  onCategoryClick = (e) => {
    const targetCategory = e.target;
    let activeComponent = document.getElementsByClassName('category-item active')[0];
    activeComponent.className = 'category-item';
    targetCategory.className = 'category-item active';
  }

  onModelOk = () => {
    const { dispatch } = this.props;
    const categoryName = this.props.form.getFieldValue('categoryName');
    dispatch(newCategorie(categoryName)).then((response) => {
      if (response.status == 200) {
        dispatch(fetchCategories());
        this.props.form.setFieldsValue({'categoryName': ''});
        message.info('Insert successfully!!');
        this.setState({showModal: false});
      } else if (response.status == 403){
        response.json().then((json) => {
          message.error(json['message']);
        });
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return(
      <div className="categories">
        <div className="categories-add">
          <a href="#" onClick={this.onNewCategoryClick} >New Category</a>
          <Modal width={300} onCancel={this.onModelCancel} closable={false} onOk={this.onModelOk} visible={this.state.showModal}>
            <Form>
              <FormItem>
                {getFieldDecorator('categoryName', {
                  rules: [{ required: true, message: 'Please input category name!' }],
                })(
                  <Input placeholder="Category Name" />
                )}
              </FormItem>
            </Form>
          </Modal>
        </div>
        <ul>
          {this.props.categories && this.props.categories.map((x, index) => {
            if (index == 0) {
              return (<Category key={index} isActive={true} onClick={this.onCategoryClick}>{x.name}</Category>);
            } else {
              return (<Category key={index} onClick={this.onCategoryClick}>{x.name}</Category>);
            }

          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({categories }) => {
  return {
    categories,
  };
};


export default Form.create()(connect(mapStateToProps)(CategoriesList));
