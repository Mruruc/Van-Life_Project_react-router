import React from 'react'


const SearchParams = (props) => {
  const {setSearchParam,typeFilter}=props;


  return (
    <>
      <div className='search-container'>
        <p>Search based on Type:</p>
        <div className='search-options'>
          <button
            type='button'
            className='btn'
            onClick={() => setSearchParam({ type: 'simple' })}
          >
            simple
          </button>

          <button
            type='button'
            className='btn'
            onClick={() => setSearchParam({ type: 'rugged' })}
          >
            rugged
          </button>

          <button
            type='button'
            className='btn'
            onClick={() => setSearchParam({ type: 'luxury' })}
          >
            luxury
          </button>

          {
            typeFilter ? (<button
            type='button'
            className='btn'
            onClick={() => setSearchParam({})}
          >
            clear all
          </button>) : (null)
          }
        </div>
      </div>

      {/*

      <div className='search-container'>
      <div className='btn'>
        <Link to='?type=simple'>simple</Link>
      </div>
      <div className='btn'>
        <Link to='?type=rugged'>rugged</Link>
      </div>
      <div className='btn'>
        <Link to='?type=luxury'>luxury</Link>
      </div>
      <div className='btn'>
        <Link to='.'>clear all</Link>
      </div>


    
    */}
    </>
  );
}

export default SearchParams;
