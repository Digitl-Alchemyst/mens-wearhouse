import ProductCard from '@/c/cards/ProductCard';

interface ProductSliderProps {
  products: {
    id: number;
    title: string;
    img: string;
    url: string;
    price: string;
  }[];
  directory: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  directory,
}) => {
  return (
    <div className='flex justify-center space-x-7'>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} directory={directory} />
      ))}
    </div>
  );
};

export default ProductSlider;
