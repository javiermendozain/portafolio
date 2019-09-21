import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../../../redux/actions/loginActions';

//  Assets
//import logo from './logo.svg';
import './header.css';

const Header = ({logOut, firebase}) => {

  const { auth: { uid } } = firebase;

  return (
    <header className="header fixed-top  " >
      {/* Logo */}
      <div className='Branch' >
        <img src='https://avatars3.githubusercontent.com/u/37485620?s=400&u=9f15d4b285322f67d324a27cbf223412c4c9b9e8&v=4'
          width='120px' alt='Branch'
        />
        <div style={{display:'grid'}}>
          <strong >Javier Mendoza</strong>
          <small className='Profession'>Ingeniero en telecomunicaciones</small>
        </div>
      </div>

      {/* <!-- Topbar Search --> */}
      {/*  Hidden temporal

      <div className='searcher'>
        <form className="">
          <div className="input-group">
            <input type="text" className=" " placeholder="Busca cursos, publicaciones, tips, frases" aria-label="Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button onClick={()=>alert('Searching')} className="" aria-hidden="true" type="button">
                <img src='./icon/find.png' />
              </button>
            </div>
          </div>
        </form>
      </div> */}

      <div className='searcher'>
        Developing with ♥
      </div>
      {/*    Hidden temporal

      <div className='campana'>
        <img onClick={()=>logOut()} src='/logout.png' />
      </div> */}

    </header>
  );
};

const mapStateToProps = ({ firebase }) => ({ firebase });

const mapDistpachToProps = {
  logOut
};

export default connect( mapStateToProps, mapDistpachToProps )(Header);

