import React from 'react'
import {  Outlet } from 'react-router-dom';
import HostHeader from '../pages/host/HostHeader';

const HostLayout = () => {
  return (
    <>
     <HostHeader/>

      <Outlet/>
      
    </>
  );
}

export default HostLayout;
