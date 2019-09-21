// Dependencies
import React,{ Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { openCloseModal } from '../../../redux/actions/modalActions';
import LoadingLayout from '../../../global/components/Loading/loading-layout';


// Styles
//import styles from './Home.scss';

const Home = (props) => {
  const { openCloseModal } = props;

  setTimeout(() => {
    props.history.push('/blog');
  },2000);

  return (
    <div style={{textAlign: 'center'}}>
      Bienvenidos!
      <LoadingLayout/>
    </div >

  );
};

const mapDispatchToProps = {
  openCloseModal
};


export default connect(null,mapDispatchToProps)(withRouter(Home));
