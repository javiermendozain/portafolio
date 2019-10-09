import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { logOut } from '../../../../redux/actions/loginActions';

//  Assets
//import logo from './logo.svg';
import './header.css';

const Header = ({logOut, firebase}) => {

  const { auth: { uid } } = firebase;
//header fixed-top
  return (
    <div className=" " >
      <nav className="navbar  header fixed-top navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Logo */}
          <Link className='Branch navbar-brand' to='/' >
            <img src='https://avatars3.githubusercontent.com/u/37485620?s=400&u=9f15d4b285322f67d324a27cbf223412c4c9b9e8&v=4'
              width='120px' alt='Branch'
            />
            <div style={{display:'grid'}}>
              <strong >Javier Mendoza</strong>
              <small className='Profession'>Ingeniero en telecomunicaciones</small>
            </div>
          </Link>
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul> */}
          <div className='searcher'>
            Developing with <FaHeart style={{color:'red'}}/>
          </div>

          {/* <!-- Topbar Search --> */}
          {/* Hidden temporal */}

          {/* <div className='searcher'>
            <div className="form" >
              <div className="input-group">
                <input type="text" placeholder="Busca cursos, publicaciones, tips, frases" aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button onClick={(e)=>{
                    e.preventDefault();
                    alert('Searching');
                  }} className="" aria-hidden="true" type="button">
                    <img src='./icon/find.png' />
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Hidden temporal */}
          {/* <div className='campana'>
            <img onClick={()=>logOut()} src='./icon/logout.png' />
          </div> */}


        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({ firebase });

const mapDistpachToProps = {
  logOut
};

export default connect( mapStateToProps, mapDistpachToProps )(Header);

