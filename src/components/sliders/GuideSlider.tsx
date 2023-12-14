// ProductSlider.tsx

import React from 'react';
import GuidesCard from '@/c/cards/GuidesCard';

interface GuideSliderProps {
  products: {
    id: number;
    title: string;
    img: string;
    url: string;
    description: string;
  }[];
  directory: string;
}

const GuideSlider: React.FC<GuideSliderProps> = ({
  products,
  directory,
}) => {
  return (
    <div className='flex justify-center items-center mb-8 space-x-12'>
      {products.map((product) => (
        <GuidesCard key={product.id} {...product} directory={directory} />
      ))}
    </div>
  );
};

export default GuideSlider;
