import OccasionsGuide from '@/components/sliders/OccasionsGuide';
import React from 'react';

function OccasionsPage() {
  return (
    <main className='mt-12 w-full max-w-[1400px]'>
      <div className='flex flex-col items-center justify-center space-y-2 py-6'>
        <h1 className='text-7xl font-bold text-mwnavy-600'>
          RAISE THE BAR THIS FALL
        </h1>
        <h2 className='text-2xl font-semibold text-mwnavy-700'>
          Elevate your every day and love the way you look all season long.
        </h2>
      </div>

      <div className='border-b border-mwblack-400/40 ' />

      <div className='py-4'>
        {/* Occasions Guide  */}
        <OccasionsGuide />
      </div>
    </main>
  );
}

export default OccasionsPage;
