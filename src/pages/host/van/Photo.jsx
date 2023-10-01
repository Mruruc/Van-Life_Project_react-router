import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Photo = () => {
  const [van] =useOutletContext();
  return (
    <div>
      
      {
        van.map((v)=><img src={v.imageUrl} alt={v.name} className='van-img'/>)
      }
    </div>
  )
}

export default Photo;
