import React from 'react'
import { useOutletContext } from 'react-router-dom';


const Details = () => {
  const [van] = useOutletContext();

  return (
    <div>
      {van.map((v) => {
        return (
          <div key={v.id}>
            <h1>Name:{v.name}</h1>
            <p>
              <strong>Description:</strong>
              {v.description}
            </p>
            <h2>Category:{v.type}</h2>
            <h3>Visibility: public</h3>
          </div>
        );
      })}
      
      
      
      
    </div>
  );
}

export default Details;
