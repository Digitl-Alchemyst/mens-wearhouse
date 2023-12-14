// ProductCard.tsx

import Image from 'next/image';
import React from 'react';

interface BrandsSliderProps {
  id: number;
  title: string;
  img: string;
  url: string;
  directory: string;
}

const BrandsCard: React.FC<BrandsSliderProps> = ({
  id,
  title,
  img,
  url,
  directory,
}) => {
  const imagePath = `/${directory}/${img}`; // Adjust the path based on your project structure

  return (
    <div className='w-78 space-y-4'>
      <div className='flex w-full items-center justify-center rounded-full '>
        <Image
          src={imagePath}
          alt={title}
          width={375}
          height={375}
          className=' flex items-center justify-center rounded-full border border-mwnavy-400/30 bg-mwblack-100/60 shadow-md shadow-mwblack-600/40'
        />
        {/* Add other details as needed */}
      </div>
      <div className='mt-3 flex flex-col items-center justify-center text-mwblack-500'>
        <h3 className='text-lg'>{title}</h3>
      </div>
    </div>
  );
};

export default BrandsCard;
