import React from 'react';

function Filters() {
  return (
    <section className='flex  justify-between'>
      {/* Filters  */}
      <div className='flex space-x-4'>
        {/* Sort  */}
        <p>Sort</p>
        <div className='border-r border-mwblack-400/40 pt-6' />
        {/* Filters  */}
        <p>Filters</p>
        <div className='border-r border-mwblack-400/40 pt-6' />
        {/* Single Filters */}

        <div className='flex space-x-3'>
          <p>Color</p>
          <p>Size</p>
          <p>Type</p>
          <p>Brand</p>
          <p>Occasion</p>
          <p>Price</p>
        </div>
      </div>

      {/* Filter Switches  */}
      <div className=''>
        {/* Pick up at Store  */}
        Pick up at Store (# of items available)
        {/* Display Toggle  */}
      </div>
    </section>
  );
}

export default Filters;
