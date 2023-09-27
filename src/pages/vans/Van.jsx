import React from 'react'

const Van = ({ name, price, description, imageUrl, type }) => {
  return (
    <div className='van'>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} className='van-img'/>
      <p>{description}</p>
      <p>${price}</p>
      <h3>{type}</h3>
    </div>
  );
};

export default Van;
