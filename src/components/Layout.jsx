import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

/**
 * 
 <Outlet> Component: 
 In this code, we are using the <Outlet> component inside the Layout component. The <Outlet> component is a special component provided by React Router. It acts as a placeholder for the child routes defined within a parent route. In this case, child routes like <Route path='/' element={<Home />} /> and <Route path='/about' element={<About />} /> will be rendered inside the <Outlet> in the Layout component. This allows you to nest route content within your layout.
 */

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
