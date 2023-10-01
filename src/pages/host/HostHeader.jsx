import React from 'react';
import { NavLink } from 'react-router-dom';

const HostHeader = () => {
  const activeStyle={
    fontWeight:'bold',
    textDecoration:'underline',
    color:'green'
  };
  return (
    <nav className='host-nav'>
      <h2>
        <NavLink
          to='.' ///=> it represent current route that should be displayed
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
      </h2>
      <h2>
        <NavLink
          to='income'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
      </h2>
      <h2>
        <NavLink
          to='reviews'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </h2>
      <h2>
        <NavLink
          to='vans'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
         Vans
        </NavLink>
      </h2>
    </nav>
  );
};

export default HostHeader;
