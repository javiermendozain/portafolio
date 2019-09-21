import React, { Component} from 'react';
import { connect } from 'react-redux';
import NewPostLayout from '../../components/Blog/new-post-layout';
import { isEmpty } from '../../../../shared/utils/commonFunctions';
import { getAllCategories, getAllTag } from '../../../redux/actions/categoryActions';


class NewBlog extends Component {

  componentDidMount() {
    const { categoryReducer: {categories=[], tags=[]}, getAllCategories,getAllTag } = this.props;
    if (isEmpty(categories)) {
      getAllCategories();
    }
    if (isEmpty(tags)) {
      getAllTag();
    }
  }

  render() {
    return <NewPostLayout/>;
  }
}

const mapStateToProps = ({categoryReducer})=>({categoryReducer});

const mapDispatchToProps = {
  getAllCategories, getAllTag
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog);
