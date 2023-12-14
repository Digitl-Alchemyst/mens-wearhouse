import BrandsCard from '@/c/cards/BrandsCard';

interface BrandsSliderProps {
  brands: {
    id: number;
    title: string;
    img: string;
    url: string;
  }[];
  directory: string;
}

const BrandsSlider: React.FC<BrandsSliderProps> = ({ brands, directory }) => {
  return (
    <div className='mb-8 flex items-center justify-center space-x-12'>
      {brands.map((brand) => (
        <BrandsCard key={brand.id} {...brand} directory={directory} />
      ))}
    </div>
  );
};

export default BrandsSlider;
