import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CheckLog = ({children, history, firebase}) => {
  const showContent = () => {
    const { auth: {uid} } = firebase;
    if (!uid) {
      history.replace('/login');
      return null;
    }
    return children;
  };

  return showContent();
};


const mapStateToProps = ({ firebase }) => ({ firebase });


export default connect(mapStateToProps)(withRouter(CheckLog));
