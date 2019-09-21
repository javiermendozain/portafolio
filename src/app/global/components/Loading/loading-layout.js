

import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../../../../public/json/loading.json';


const LoadingLayout = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{justifyItems:'center'}} >
      <Lottie
        options={defaultOptions}
        height={420}
        width={591}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default LoadingLayout;
