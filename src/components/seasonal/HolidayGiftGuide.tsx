import Link from 'next/link';
import { GoTag } from 'react-icons/go';

const HolidayGiftGuide = () => {
  return (
    <div className='mx-auto flex w-full items-center justify-center space-x-2 bg-mwnavy-500 py-2 text-zinc-200'>
      <GoTag className='text-bold' />
      <h2 className=''>HOLIDAY GIFT GUIDE</h2>
      <Link
        href='https://www.menswearhouse.com/shop/holiday-gift-guide'
        className='underline'
      >
        Shop Now
      </Link>
    </div>
  );
};

export default HolidayGiftGuide;
