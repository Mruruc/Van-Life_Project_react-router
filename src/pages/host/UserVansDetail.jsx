import React, { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import data from '../../data';
import UserVanHeader from './van/UserVanHeader';

const UserVansDetail = () => {
  const [vans, setVans] = useState(data);

  const param = useParams();

  const van = vans.filter((v) => v.id === param.id);

  return (
    <div>
      <h2 className='back-to-link'>
        <Link to='..' relative='path'>
          Back All Vans{' '}
        </Link>
      </h2>

      {van.map((v) => {
        return (
          <div key={v.id}>
            <img src={v.imageUrl} alt={v.name} className='van-img' />
            <h2>{v.name}</h2>

            <p>${v.price}</p>
            <button type='button' className='btn'>
              {v.type}
            </button>
          </div>
        );
      })}
      
      <UserVanHeader/>
      <Outlet />
    </div>
  );
};

export default UserVansDetail;


// <p>{v.description}</p>