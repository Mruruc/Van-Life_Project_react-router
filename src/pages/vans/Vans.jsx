import React, { useState } from 'react';
import data from '../../data.js';
import Van from './Van.jsx';
import { Link } from 'react-router-dom';
const Vans = () => {
  const [vans, setVans] = useState(data);

  return (
    <div className='vans'>
      <div className='vans-header'>
        <h1>Vans</h1>
      </div>
      <div className='van-list'>
        {vans.map((van) => {
          return (
            <Link to={`/vans/${van.id}`} key={van.id}>
              <Van {...van} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
