import React from 'react';

//  Assets
import './content.css';

const Content=({children})=>{
  return (
    <div className='content' >
      {children}
    </div>
  );
};

export default Content;
