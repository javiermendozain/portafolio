
import React from 'react';
import { NavLink } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

// Assets
import './navigation.css';

const Navigation = () => {
  return (
    <div className='navigation' >
      {/* Hidden Temporal

        <div className='container-btn-back'>
        <Button onClick={()=>true} outline color="primary" >
          <FontAwesomeIcon icon={faChevronLeft} className='navigation-back' />
        </Button>
      </div>
      <hr className="sidebar-divider my-0"/>
       */}
      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <nav>
        <ul>
          <li>
            {/* <NavLink to='/' exact activeClassName='is-selected' > */}
            <div className='content-item hidden'>
              <img src='./icon/house.png' className='icon' />
              <span className='title'> Inicio </span>
            </div>
            {/* </NavLink> */}
          </li>
        </ul>
        <ul>
          <li>
            {/* <NavLink to='/cursos' activeClassName='is-selected' > */}
            <div className='content-item hidden'>
              <img src='./icon/elearning.png' className='icon' />
              <span className='title'>Cursos</span>
            </div>
            {/* </NavLink> */}
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='/blog' activeClassName='is-selected' >
              <div className='content-item'>
                <img src='./icon/writer.png' className='icon' />
                <span className='title'>Blog</span>
              </div>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            {/* <NavLink to='/about' activeClassName='is-selected' > */}
            <div className='content-item hidden'>
              <img src='./icon/award.png' className='icon' />
              <span className='title'>Acerca</span>
            </div>
            {/* </NavLink> */}
          </li>
        </ul>
        <ul>
          <li>
            {/* <NavLink to='/cv' activeClassName='is-selected' > */}
            <div className='content-item hidden'>
              <img src='./icon/resume.png' className='icon' />
              <span className='title'>Currículum Vitae</span>
            </div>
            {/* </NavLink> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
