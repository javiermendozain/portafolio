
import React from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import './layout.css';

const Layout = ({children}) => {

  return (
    <div className='layout' >
      <Header />
      <Navigation/>
      <Content>
        <div className='content-layout'>
          {children}
        </div>
        <Footer />
      </Content>
    </div>
  );
};

export default Layout;
