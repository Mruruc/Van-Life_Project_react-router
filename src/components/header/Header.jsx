import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <h1>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            #VANLIFE
          </NavLink>
        </h1>
        <h2>
          <NavLink
            to='/host'
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Host
          </NavLink>
        </h2>

        <h2>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            About
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to='/vans'
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Vans
          </NavLink>
        </h2>
      </nav>
    </header>
  );
};

export default Header;
