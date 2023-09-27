import React, { useState } from 'react'
import data from '../../data.js'
import Van from './Van.jsx'
const Vans = () => {

  const [vans,setVans]=useState(data);

  return (
    <div>
      <h1>Vans</h1>
      {
        vans.map((van)=>{
          return(
            <Van key={van.id} {...van}/>
          )
        })

      }
    </div>
  )
}

export default Vans;
