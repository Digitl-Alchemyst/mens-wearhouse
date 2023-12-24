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
    <section className='grid grid-cols-4'>
      {products.map((product) => (
        <div key={product.id} className=''>
          <ProductCard key={product.id} {...product} directory={directory} />
        </div>
      ))}
    </section>
  );
}

export default LgProductDisplay