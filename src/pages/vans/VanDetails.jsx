import React, { useState } from 'react';

import { useParams, Link, useLocation } from 'react-router-dom';
import data from '../../data';

/**
 * useParams() is a React Router hook used to
 * retrieve and work with URL parameters, providing access to the values defined in the URL route.
 */

const VanDetails = () => {
  const [vans, setVans] = useState(data);
  const location = useLocation();
  console.log(location);

  const params = useParams();
  //  console.log( params);

  const van = vans.filter((v) => v.id === params.id);
  //console.log(van);
  const whereToGo = location.state?.searchType || '';
  return (
    <div className='van-details'>
      <h3>Van Detail</h3>

      <Link to={`..?type=${whereToGo}`} relative='path' className='back-link'>
        Back all vans....
      </Link>

      <div>
        {van.map((v) => {
          return (
            <div key={v.id} className='van-detail'>
              <img src={v.imageUrl} alt={v.name} className='van-detail-img' />
              <h2>{v.name}</h2>
              <p>{v.description}</p>
              <p>${v.price}</p>
              <button type='button' className='btn'>
                {v.type}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VanDetails;
