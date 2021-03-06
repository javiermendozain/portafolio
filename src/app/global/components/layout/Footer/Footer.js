import React from 'react';
import { FaFacebookSquare, FaGithub, FaTwitter, FaGitlab,
  FaLinkedin, FaYoutube, FaInstagram, FaHeart, FaFacebook } from 'react-icons/fa';
import { Row,Col, Input, Button } from 'reactstrap';


//  Assets
import './footer.css';

const Footer = () => {

  return (
    //className="App-footer"
    <footer className="footer" >
      <Row>
        <Col >
          <strong>
            He creado este CMS con ReactJS + Redux + <FaHeart style={{color:'red'}}/>
          </strong>
        </Col>
      </Row>
      <Row>
        <Col className='subcribe'> Suscribete para nuevas publicaciones </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='col-auto'>
          <Input placeholder='Email' ></Input>
        </Col>
        <Col className='col-auto'>
          <Button onClick={()=>alert('¡ Gracias por suscribirte !')} >Suscribirse</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='https://google.qwiklabs.com/public_profiles/bae51bec-ea15-4795-aad1-19ced5b4ec4a' target="blank" >
            <img src='./icon/qwiklabs.png' width='16px' height='16px' />&nbsp; Qwik Labs
          </a>
        </Col>
        <Col>
          <a href='https://github.com/Javiermendozain' target="blank" >
            <FaGithub/>&nbsp; GitHub
          </a>
        </Col>
        <Col>
          <a href='https://gitlab.com/javiermendozain' target="blank" >
            <FaGitlab/>&nbsp; GitLab
          </a>
        </Col>
        <Col>
          <a href='https://www.linkedin.com/in/javier-eduardo-mendoza-castillo/' target="blank" >
            <FaLinkedin/>&nbsp; LinkedIn
          </a>
        </Col>
        <Col>
          <a href='https://www.youtube.com/Javiermendozain' target="blank" >
            <FaYoutube/>&nbsp; Youtube
          </a>
        </Col>
        <Col>
          <a href='https://twitter.com/javiermendozain' target="blank" >
            <FaTwitter/>&nbsp; Twitter
          </a>
        </Col>
        <Col>
          <a href='https://www.instagram.com/javiermendozain/' target="blank" >
            <FaInstagram/>&nbsp; Instagram
          </a>
        </Col>
        <Col>
          <a href='https://www.facebook.com/javiermendozain' target="blank" >
            <FaFacebookSquare/>&nbsp; Facebook
          </a>
        </Col>
      </Row>
      <small>
        &copy; {new Date().getFullYear()} Javier Mendoza. All rights reserved.

      </small>
    </footer>
  );
};


export default Footer;
