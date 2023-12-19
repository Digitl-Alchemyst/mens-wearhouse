import { GoPerson, GoTag } from 'react-icons/go';
import {
  CiCreditCard2,
  CiDeliveryTruck,
  CiGift,
  CiLocationOn,
} from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { IoIosBowtie } from 'react-icons/io';
import { IoTicketOutline } from 'react-icons/io5';
import { PiSignOutLight } from 'react-icons/pi';
import { MdArrowForwardIos } from 'react-icons/md';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import Image from 'next/image';

const accountMenu = [
  {
    icon: GoPerson,
    title: 'Account Info',
  },
  {
    icon: CiGift,
    title: 'PerfectFit Rewards',
  },
  {
    icon: CiDeliveryTruck,
    title: 'Order History',
  },
  {
    icon: CiCreditCard2,
    title: 'My Wallet',
  },
  {
    icon: CiLocationOn,
    title: 'My Addresses',
  },
  {
    icon: FaRegHeart,
    title: 'Saved Items',
  },
  {
    icon: IoIosBowtie,
    title: 'Rental Dashboard',
  },
  {
    icon: PiSignOutLight,
    title: 'Sign Out',
  },
];

function AccountButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className='flex space-x-2'>
          <p className='font-light'>Account</p>
          <GoPerson className='h-5 w-5' />
        </div>
      </PopoverTrigger>
      <PopoverContent className='fixed -left-18 -top-20 w-[500px] overflow-y-auto bg-zinc-100 p-5'>
        {/* Logged Out Content */}
        <div className='flex justify-between border-b border-mwblack-100 px-4 py-3 pb-4'>
          <h3 className='text-sm font-light'>SIGN IN / CREATE ACCOUNT</h3>
          <button>X</button>
        </div>
        {/* Login  */}
        <div className=''>
          <h2 className='py-6 text-lg'>Sign in or create an account</h2>
          {/* Account Input  */}
          <div className='mb-4 rounded border border-mwblack-200 bg-white p-4 px-2'>
            <input
              type='email'
              placeholder='Email Address'
              className='w-full  focus:outline-none'
            />
          </div>
          {/* Password Input  */}
          <div className='mb-4 rounded border border-mwblack-200 bg-white p-4 px-2'>
            <input
              type='password'
              placeholder='Password'
              className='r w-full focus:outline-none'
            />
          </div>
          {/* Remember Me */}
          <div className='flex items-center space-x-3 pb-3'>
            <Checkbox className='h-6 w-6' />
            <p>Remember me</p>
          </div>
          {/* Account Buttons */}
          <div className='flex flex-col space-y-3'>
            <button className=' w-full border border-mwnavy-700 bg-mwnavy-600 py-2 text-mwblack-100 shadow-sm shadow-mwblack-800/70'>
              SIGN IN
            </button>
            <button className=' w-full border border-mwnavy-700 py-2 shadow-sm shadow-mwblack-800/70'>
              CREATE ACCOUNT
            </button>
          </div>
          {/* Disclaimers */}
          <div className='space-y-3 py-5 text-xs font-light'>
            <p>
              To learn more about the collection and use of your personal
              information, visit our{' '}
              <Link
                className='text-semibold underline'
                href='https://www.tailoredbrands.com/privacy-policy/'
              >
                Privacy Policy{' '}
              </Link>
              and{' '}
              <Link
                className='text-semibold underline'
                href='https://www.menswearhouse.com/slc/notice-of-financial-incentive'
              >
                Notice of Financial Incentive.{' '}
              </Link>
            </p>
            <p>
              This site is protected by reCAPTCHA.{' '}
              <Link
                className='text-semibold underline'
                href='https://policies.google.com/privacy'
              >
                Google Privacy Policy{' '}
              </Link>
              and{' '}
              <Link
                className='text-semibold underline'
                href='https://policies.google.com/terms'
              >
                Terms of Service{' '}
              </Link>
              apply.
            </p>
          </div>
        </div>
        {/* Perfect Fit Program  */}
        <div className='space-y-8 bg-mwnavy-500 px-5 py-4 text-mwblack-100'>
          <div className=''>
            <Image src='/perfectfit.png' alt='' width={250} height={75} />
          </div>
          <div className='flex flex-col space-y-2 text-sm'>
            <div className='flex space-x-3 items-center'>
              <IoTicketOutline className='h-6 w-6' />
              <p>$50 reward for every $500 you spend</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <GoTag className='h-6 w-6' />
              <p>$40 off select tuxedo and suit rentals</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <CiGift className='h-6 w-6' />
              <p>A special birthday offer just for you</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <CiDeliveryTruck className='h-6 w-6' />
              <p>Free shipping on every online order, no minimum</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <GoPerson className='h-6 w-6' />
              <p>Exclusive offers for members</p>
            </div>
          </div>
        </div>

        {/* Logged In Content */}
        {/* {accountMenu.map((menuItem, index) => (
          <div
            key={index}
            className={`flex justify-between space-x-2 px-2 py-3 ${
              index !== accountMenu.length - 1 ? 'border-b' : 'py-0 pt-3'
            } mt-1`}
          >
            <div className='flex space-x-3'>
              <menuItem.icon className='h-5 w-5' />
              <p className='font-light'>{menuItem.title}</p>
            </div>
            <MdArrowForwardIos className='h-5 w-5' />
          </div>
        ))} */}
      </PopoverContent>
    </Popover>
  );
}

export default AccountButton;
