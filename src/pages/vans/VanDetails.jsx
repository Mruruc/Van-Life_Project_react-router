import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import data from '../../data';

/**
 * useParams() is a React Router hook used to   retrieve and work with URL parameters, providing access to the values defined in the URL route.
 */

const VanDetails = () => {
  const [vans, setVans] = useState(data);

  const params = useParams();
  //  console.log( params);

  const van = vans.filter((v) => v.id === params.id);
  //console.log(van);

  return (
    <div className='van-details'>
      <h3>Van Detail</h3>

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
