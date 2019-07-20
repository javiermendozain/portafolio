import React from 'react';

// Assets
import './login.css';

const loginLayout = () => {

  return (
    <div className='login-container'>

      <div className='login-buttons'>
        {/* header buttons */}
        <strong> Ahora todo es posible</strong>
        <small>Inicia sesion con alguna de tu cuenta, la que prefieras</small>
        <br/>
        {/* Button Log */}

        <div className='content-login-button btn-google' onClick={()=>alert('Clicked Btn Google')}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with google</span>
        </div>

        <div className='content-login-button btn-facebook' onClick={()=>alert('Clicked Btn Facebook')}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with Facebook</span>
        </div>

        <div className='content-login-button btn-twitter' onClick={()=>alert('Clicked Btn twitter')}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with twitter</span>
        </div>

        <div className='content-login-button btn-git-hub' onClick={()=>alert('Clicked Btn GitHub')}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with GitHub</span>
        </div>

        <div className='content-login-button btn-linkedin' onClick={()=>alert('Clicked Btn Linkedin')}>
          <img src='/online.png' className='icon' />
          <span className='text'> Login with Linkedin</span>
        </div>
      </div>

      {/* Imagen */}
      <div>
        <img src='/img-log.png'/>
      </div>
    </div>
  );

};

export default loginLayout;
