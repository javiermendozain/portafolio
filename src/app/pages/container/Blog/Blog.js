import React from 'react';
import { connect } from 'react-redux';
import BlogLayout from '../../components/Blog/blog-layout';
import { getPostInitial } from '../../../redux/actions/postActions';

class Blog extends React.Component {

  componentDidMount() {
    // filter by category
    const { getPostInitial, match: {params:{ idCategory }} } = this.props;
    getPostInitial(idCategory);
  }

  componentDidUpdate(prevProps) {
    const { match: {params:{ idCategory:prevID }} }=prevProps;
    const { getPostInitial, match: {params:{ idCategory }}} = this.props;

    if (prevID !== idCategory) {
      getPostInitial(idCategory);
    }
  }

  render() {
    return <BlogLayout/>;
  }
}

const mapStateToProps = ({postReducer})=>({postReducer});


const mapDispatchToProps = {
  getPostInitial
};

export default connect(mapStateToProps,mapDispatchToProps)(Blog);
