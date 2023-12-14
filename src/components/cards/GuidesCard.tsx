import Image from 'next/image';
import Link from 'next/link';

interface GuidesCardProps {
  id: number;
  title: string;
  img: string;
  url: string;
  directory: string;
  description: string;
}

const GuidesCard: React.FC<GuidesCardProps> = ({
  title,
  img,
  url,
  directory,
  description,
}) => {

  const imagePath = `/${directory}/${img}`;
  const path = `/${directory}/${url}`;

  return (
    <Link href={path}className='w-78 space-y-4'>
      <div className='flex w-full items-center justify-center rounded-full '>
        <Image
          src={imagePath}
          alt={title}
          width={375}
          height={375}
          className='rounded-full border border-mwnavy-400/30 bg-mwblack-100/60 shadow-md shadow-mwblack-600/40'
        />
      </div>
      <div className='mt-3 flex flex-col items-center justify-center text-mwblack-500'>
        <h3 className='text-lg'>{title}</h3>
        <p className='font-light text-mwblack-400'>{description}</p>
      </div>
    </Link>
  );
};

export default GuidesCard;
