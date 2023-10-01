import React from 'react'

const Van = ({ name, price,imageUrl, type }) => {
  return (
    <div className='van'>
      <img src={imageUrl} alt={name} className='van-img' />
      <h2>{name}</h2>
      <p>${price}</p>
      <button type='button' className='btn'>
        {type}
      </button>
    </div>
  );
};

export default Van;

//<p>{description}</p>;