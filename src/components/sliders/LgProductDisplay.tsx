import React from 'react'
import ProductCard from '../cards/ProductCard';

interface LgProductDisplayProps {
  products: {
    id: number;
    title: string;
    img: string;
    url: string;
    price: string;
  }[];
  directory: string;
}

const LgProductDisplay: React.FC<LgProductDisplayProps> = ({
  products,
  directory,
}) => {
  return (
    <section className='grid grid-cols-4 space-x-3 space-y-6'>
      {products.map((product, index) => (
        <div key={product.id} className={index === 0 ? 'mt-6 w-84' : ''}>
          <ProductCard key={product.id} {...product} directory={directory} />
        </div>
      ))}
    </section>
  );
}

export default LgProductDisplay