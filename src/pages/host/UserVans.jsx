import React, { useState } from 'react';
import data from '../../data';
import { Link } from 'react-router-dom';

const UserVans = () => {
  const [vans, setVans] = useState(data);

  const vansWhereUserId1 = vans.filter((e) => e.userId === 1);

  return (
    <div>
      <h1>Specific User Vans</h1>

      {vansWhereUserId1.map((v) => {
        return (
          <div className='user-vans' key={v.id}>
            <Link to={`/host/vans/${v.id}`}>
              <img src={v.imageUrl} alt={v.name} />;<h2>{v.name}</h2>
              <h3>${v.price}/day</h3>
              <button className='btn'>{v.type}</button>{' '}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserVans;
