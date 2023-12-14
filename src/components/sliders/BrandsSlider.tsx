// ProductSlider.tsx

import React from 'react';
import BrandsCard from '@/c/cards/BrandsCard';

interface BrandsSliderProps {
  products: {
    id: number;
    title: string;
    img: string;
    url: string;
  }[];
  directory: string;
}

const BrandsSlider: React.FC<BrandsSliderProps> = ({ products, directory }) => {
  return (
    <div className='mb-8 flex items-center justify-center space-x-12'>
      {products.map((product) => (
        <BrandsCard key={product.id} {...product} directory={directory} />
      ))}
    </div>
  );
};

export default BrandsSlider;
