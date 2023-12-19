import Image from 'next/image';
import HolidayGiftGuide from '../seasonal/HolidayGiftGuide';
import { RiMapPin2Line } from 'react-icons/ri';
import { GoTag } from 'react-icons/go';

import { SlMagnifier } from 'react-icons/sl';
import { Input } from '../ui/input';
import Link from 'next/link';
import OffersSlider from '../sliders/OffersSlider';
import QuickLinks from './QuickLinks';
import StoreLocator from './StoreLocator';
import SearchBar from './SearchBar';

function Header() {
  return (
    <>
      <HolidayGiftGuide />

      {/* Main Header  */}
      <header className='flex w-full max-w-[1350px] flex-col items-center justify-center space-y-3 '>

        {/* Store Locator & Account  */}
        <div className='b-4 border-mwblack-300/70 flex w-full items-center justify-between border-b py-2 px-2'>
          {/* Store Locator  */}
          <StoreLocator />
          {/* Vertical Sales Scroller  */}
          <OffersSlider />
          {/* Quick Links Buttons  */}
          <QuickLinks />
          
        </div>

        {/* Nav & Search */}
        <div className='border-mwblack-300/70 flex w-full items-center justify-between border-b px-2'>
          {/* Nav  */}
          <div className='text-mwblack-500 flex flex-col space-y-2 text-sm font-light mt-1'>
            {/* Text Logo  */}
            <Link href='/'>
              <Image
                className=''
                src='/TextLogo.png'
                alt='Mens Wearhouse Text Logo'
                width={250}
                height={30}
                />
            </Link>
            {/* Navigation Menu  */}
            <nav className='flex space-x-1 -m-2 text-sm'>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Clothing
              </button>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Shoes
              </button>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Accessories
              </button>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Big & Tall
              </button>
              <button className='hover:border-b-red-500 flex items-center space-x-2 px-2 py-2 font-bold text-red-500 hover:cursor-pointer hover:border-b'>
                <GoTag />
                <p className=''>Sale</p>
              </button>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Gifts
              </button>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Occasions
              </button>
              <button className='hover:border-b-mwblack-600 px-2 py-2 hover:cursor-pointer hover:border-b'>
                Rental
              </button>
            </nav>
          </div>
          {/* Search  Bar*/}
          <SearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
