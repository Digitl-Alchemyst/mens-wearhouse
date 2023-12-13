import Link from 'next/link';
import { GoTag } from 'react-icons/go';

const HolidayGiftGuide = () => {
  return (
    <div className='bg-mwnavy-500 mx-auto flex items-center justify-center space-x-2 py-2 text-zinc-200 w-full'>
      <GoTag className='text-bold'/>
      <h2 className=''>HOLIDAY GIFT GUIDE</h2>
      <Link href='' className='underline'>
        Shop Now
      </Link>
    </div>
  );
};

export default HolidayGiftGuide;
