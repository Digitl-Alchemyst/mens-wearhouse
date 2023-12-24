import Image from 'next/image';
import HolidayGiftGuide from '../seasonal/HolidayGiftGuide';
import { RiMapPin2Line } from 'react-icons/ri';


import { SlMagnifier } from 'react-icons/sl';
import { Input } from '../ui/input';
import Link from 'next/link';
import OffersSlider from '../sliders/OffersSlider';
import QuickLinks from './QuickLinks';
import StoreLocator from './StoreLocator';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';



function Header() {


  return (
    <>
      <HolidayGiftGuide />

      {/* Main Header  */}
      <header className='flex w-full max-w-[1350px] flex-col items-center justify-center space-y-3 '>
        {/* Store Locator & Account  */}
        <div className='b-4 flex w-full items-center justify-between border-b border-mwblack-300/70 px-2 py-2'>
          {/* Store Locator  */}
          <StoreLocator />
          {/* Vertical Sales Scroller  */}
          <OffersSlider />
          {/* Quick Links Buttons  */}
          <QuickLinks />
        </div>

        {/* Nav & Search */}
        <div className='flex w-full items-center justify-between border-b border-mwblack-300/70 px-2'>
          {/* Nav  */}
          <div className='mt-1 flex flex-col space-y-2 text-sm font-light text-mwblack-500'>
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
            <NavMenu />

          </div>
          {/* Search  Bar*/}
          <SearchBar />
        </div>
      </header>
    </>
  );
}

export default Header;
