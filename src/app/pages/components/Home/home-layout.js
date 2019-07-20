// Dependencies
import React,{ Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { OpenCloseModal } from '../../../redux/types/modalActionsTypes';
import { Button } from 'reactstrap';


// Styles
//import styles from './Home.scss';

const Home = (props) => {
  const { OpenCloseModal } = props;


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
      <Button onClick={() => OpenCloseModal()} >
        Open Modal
      </Button>

    </Fragment>
  );
};

const mapDispatchToProps = {
  OpenCloseModal
};


export default connect(null,mapDispatchToProps)(withRouter(Home));
