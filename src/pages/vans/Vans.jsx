import React, { useEffect, useState } from 'react';
import data from '../../data.js';
import Van from './Van.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import SearchParams from './SearchParams.jsx';

const Vans = () => {
  const [vans, setVans] = useState(data);

  const [searchParam, setSearchParam] = useSearchParams();
  //console.log(searchParam);

  const typeFilter = searchParam.get('type');
  //console.log(typeFilter);

  const filteredVans = typeFilter
    ? vans.filter((v) => v.type === typeFilter)
    : vans;

  return (
    <div className='vans'>
      <div className='vans-header'>
        <h1>Explore our van options</h1>
      </div>

      <SearchParams setSearchParam={setSearchParam} typeFilter={typeFilter} />

      <div className='van-list'>
        
        {filteredVans.map((van) => {
          return (
            <>
              <Link to={van.id} key={van.id} state={{searchType:typeFilter}}>
               
                <Van {...van} />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
