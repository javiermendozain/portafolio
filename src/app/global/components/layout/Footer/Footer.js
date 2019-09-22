import React from 'react';
import { FaFacebookSquare, FaGithub, FaTwitter,
  FaLinkedin, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa';
import { Row,Col, Input, Button } from 'reactstrap';


//  Assets
import './footer.css';

const Footer = () => {

  return (
    //className="App-footer"
    <footer className="footer" >
      <Row>
        <Col>
          He creado este CMS con ReactJS + Redux & <FaHeart style={{color:'red'}}/>
        </Col>
      </Row>
      <Row>
        <Col> Suscribete para nuevas publicaciones </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='col-auto'>
          <Input placeholder='Email' ></Input>
        </Col>
        <Col className='col-auto'>
          <Button >Suscribirse</Button>
        </Col>
      </Row>
      <Row>
        <Col> <FaFacebookSquare/>&nbsp; Facebook </Col>
        <Col> <FaGithub/>&nbsp; GitHub </Col>
        <Col> <FaTwitter/>&nbsp; Twitter </Col>
        <Col> <FaLinkedin/>&nbsp; LinkedIn </Col>
        <Col> <FaYoutube/>&nbsp; Youtube </Col>
        <Col> <FaInstagram/>&nbsp; Instagram </Col>
      </Row>

      &copy; {new Date().getFullYear()} Javier Mendoza. All rights reserved.
    </footer>
  );
};


export default Footer;
