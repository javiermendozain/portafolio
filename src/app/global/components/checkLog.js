import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CheckLog = ({children, history, firebase}) => {

  // const showContent = () => {
  //   const { auth: {uid, isLoaded} } = firebase;
  //   if (!uid && isLoaded) {
  //     history.replace('/login');
  //     return null;
  //   }
  //   return children;
  // };

  return children;
};


const mapStateToProps = ({ firebase }) => ({ firebase });


export default connect(mapStateToProps)(withRouter(CheckLog));
