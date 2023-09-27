import React from 'react';
import { Outlet,Routes,Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/vans/Vans';
import VanDetails from '../pages/vans/VanDetails';
/**
 * 
 <Outlet> Component: 
 In this code, you are using the <Outlet> component inside the Layout component. The <Outlet> component is a special component provided by React Router. It acts as a placeholder for the child routes defined within a parent route. In this case, child routes like <Route path='/' element={<Home />} /> and <Route path='/about' element={<About />} /> will be rendered inside the <Outlet> in the Layout component. This allows you to nest route content within your layout.
 */

const Layout = () => {
  return (
    <div>
      <Header />

      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetails />} />
      
      </Routes>

      <Footer />
    </div>
  );
};

export default Layout;
