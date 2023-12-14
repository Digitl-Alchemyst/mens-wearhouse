import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  img: string;
  url: string;
  directory: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  img,
  url,
  directory,
  price,
}) => {
  const imagePath = `/${directory}/${img}`;
  const path = `/${directory}/${url}`;
  return (
    <Link href={path} className='w-64'>
      <div className='flex w-auto items-center justify-center rounded-sm border border-mwnavy-400/30 bg-mwblack-100/60 shadow-md shadow-mwblack-600/40'>
        <Image src={imagePath} alt={title} width={375} height={375} />
      </div>
      <div className='mt-3 text-mwblack-500'>
        <h3>{title}</h3>
        <p className='mt-1'>${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
