import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Photo = () => {
  
  const [van] =useOutletContext(); //=> allow us share the state or other values to child routes.
  return (
    <div>
      
      {
        van.map((v)=><img src={v.imageUrl} alt={v.name} className='van-img'/>)
      }
    </div>
  )
}

export default Photo;
