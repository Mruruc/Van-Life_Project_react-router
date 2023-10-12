import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Not Found 404 ...</h1>
      <div className='not-found-link'>
        <Link to='/'>Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
