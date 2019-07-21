// Dependencies
import React,{ Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openCloseModal } from '../../../redux/actions/modalActions';
import { Button } from 'reactstrap';


// Styles
//import styles from './Home.scss';

const Home = (props) => {
  const { openCloseModal } = props;


  const logOut = () => {
    window.location.href='/login';
  };

  return (
    <Fragment>

      <br />
      <div onClick={logOut} >
        Login
      </div>

      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      Pagina de inicio
      <br />
      <Link to="/blog" >
        Go to Blog
      </Link>

      <br />
      <Link to="/notFound" >
        Go to Not Found
      </Link>

      <br />
      <Link to="/hello" >
        say Hello
      </Link>
      <br/>
      <Button onClick={() => openCloseModal()} >
        Open Modal
      </Button>

    </Fragment>
  );
};

const mapDispatchToProps = {
  openCloseModal
};


export default connect(null,mapDispatchToProps)(withRouter(Home));
