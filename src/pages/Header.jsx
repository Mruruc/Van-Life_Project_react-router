import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link to='/'>#VANLIFE</Link>
        </h1>

        <h2>
          {' '}
          <Link to='/about'>About</Link>
        </h2>
        <h2>
          <Link to='/vans'>Vans</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Header;
