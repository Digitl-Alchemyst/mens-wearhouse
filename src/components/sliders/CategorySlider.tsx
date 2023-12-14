import Link from 'next/link';
import { categorySlider } from '#/constants';
import Image from 'next/image';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const categoryData = categorySlider;

const CategorySlider = () => {
  return (
    <div className='flex items-center justify-center space-x-2'>
      <MdArrowBack className='h-8 w-8 text-mwblack-400' />
      <div className='mt-2 flex max-w-[1400px] justify-start space-x-7 overflow-hidden scrollbar-hide'>
        {categoryData.map((item, id) => (
          <Link
            key={item.id}
            href={item.url}
            className='flex flex-col items-center space-y-3'
          >
            <div className='relative h-50 w-50 rounded-full'>
              <Image
                src={`/category/${item.img}`}
                alt='FullCard Image'
                fill
                className='rounded-full border border-mwnavy-300/70 object-cover shadow-lg shadow-mwblack-800/40'
              />
            </div>
            <h5>{item.title}</h5>
          </Link>
        ))}
      </div>

      <MdArrowForward className='h-8 w-8 text-mwblack-400'  />
    </div>
  );
};

export default CategorySlider;
