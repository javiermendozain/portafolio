import React from 'react';
import { Link } from 'react-router-dom';

const blogsLayout = (props) => {
  //
  return (
    <div>
      List blog
      <Link to='/newBlog' >
        new post
      </Link>
    </div>
  );

};

export default blogsLayout;
