import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RiMapPin2Line } from 'react-icons/ri';
import { Input } from '../ui/input';
import Location from '@/c/global/Location'

function StoreLocator() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className='flex items-center space-x-2'>
          <RiMapPin2Line className='h-5 w-5' />
          <p className='font-light text-mwblack-300'>Find a Store</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className='bg-zinc-100 '>
        <div className='flex items-center justify-between border-b border-mwblack-100 px-4 py-3 pb-4'>
          <h3 className='text-sm font-light'>STORE LOCATOR</h3>
          <button>X</button>
        </div>
        <div className='space-y-1 px-3 py-2 text-sm'>
          <h2 className='font-semibold'>Find Your Nearest Store</h2>
          <p className='font-light'>
            Discover one of our 600+ stores worldwide for customization, fitting
            & styling advice.
          </p>
        </div>
<Location />
      </PopoverContent>
    </Popover>
  );
}

export default StoreLocator;
