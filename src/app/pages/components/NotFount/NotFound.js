import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div>
      404. Not Found
      <br />
      <Link className="Navbar__brand" to="/" >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
