import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Pricing = () => {
  
  const [van]=useOutletContext();

  return (
    <div>
      {van.map((v) => (
        <h1>${v.price}/Day</h1>
      ))}
    </div>
  );
}

export default Pricing;
