import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn, logOut } from '../../../redux/actions/loginActions';
import { setContentModal, openCloseModal } from '../../../redux/actions/modalActions';

// Assets
import './login.css';


const loginLayout = (props)=>{

  const { logIn, setContentModal, openCloseModal, firebase } = props;
  const { auth: {uid, isLoaded} } = firebase;

  // user logged
  if (uid && isLoaded) {
    props.history.replace('/');
  }

  const successfully = () => {
    const modal = {
      header: '',
      body: '¡ Has iniciado sesión correctamente! ',
      footer:''
    };
    setContentModal(modal);
    openCloseModal();
    setTimeout(() => {
      openCloseModal();
      props.history.replace('/');
    }
      ,2000);
  };

  const wrongly = (error) =>{
    logOut();
    const modal = {
      header: '',
      body: '¡ Ha ocurrido un error, intenta nuevamente !',
      footer: <button onClick={()=>openCloseModal()}>Ok</button>
    };
    setContentModal(modal);
    openCloseModal();
  };



  return (
    <div className='login-container'>

      <div className='login-buttons'>
        {/* header buttons */}
        <strong> Ahora todo es posible </strong>
        <small>Inicia sesion con alguna de tu cuenta, la que prefieras</small>
        <br/>

        {/* Button Log */}
        <div className='content-login-button btn-google' onClick={() => logIn(successfully,wrongly)}>
          <img src='./icon/online.png' className='icon' />
          <span className='text'> Login with google</span>
        </div>
        {/*
        <div className='content-login-button btn-facebook' onClick={signInWithFacebook}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with Facebook</span>
        </div>

        <div className='content-login-button btn-twitter' onClick={signInWithTwitter}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with twitter</span>
        </div>

        <div className='content-login-button btn-git-hub' onClick={signInWithGithub}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with GitHub</span>
        </div>

        <div className='content-login-button btn-linkedin' onClick={signInWithGithub}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with Linkedin</span>
        </div> */}
      </div>

      {/* Imagen */}
      <div>
        <img src='./icon/img-log.png'/>
      </div>
    </div>
  );

};

const mapStateToProps = ({ firebase }) => ({ firebase });

const mapDistpachToProps = {
  logIn, logOut, setContentModal, openCloseModal
};

export default connect( mapStateToProps, mapDistpachToProps )(withRouter(loginLayout));

