import React from 'react'
import { Link } from 'react-router-dom';

const UserVanHeader = () => {
  return (
    
      <nav className='van-detail-header'>
        <div>
          <Link to='.'>Details</Link>
        </div>
        <div>
          <Link to='pricing'>Pricing</Link>
        </div>
        <div>
          <Link to='photo'>Photos</Link>
        </div>
      </nav>
    
  );
}

export default UserVanHeader;
