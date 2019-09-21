import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as notFount404 from '../../../../../public/json/404.json';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFount404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{textAlign:'center'}} >
      <Lottie
        options={defaultOptions}
        height={420}
        width={591}
        isStopped={false}
        isPaused={false}
      />

      Ruta no encontrada!
      <br/>
      <Link className="Navbar__brand" to="/" >
        Ir al inicio
      </Link>
    </div>
  );
};

export default NotFound;
