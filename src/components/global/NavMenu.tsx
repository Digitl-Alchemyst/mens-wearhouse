'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { GoTag } from 'react-icons/go';

function NavMenu() {
       const router = useRouter();

       const routeCategory = (category: string) => {
         router.push(`/category/${encodeURIComponent(category)}`);
       };
  return (
    <nav className='-m-2 flex space-x-1 text-sm'>
      <button className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'>
        <Link href='/clothing'>Clothing</Link>
      </button>
      <button
        onClick={() => routeCategory('Shoes')}
        className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'
      >
        <Link href='/category/'>Shoes</Link>
      </button>
      <button
        onClick={() => routeCategory('Accessories')}
        className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'
      >
        <Link href='/category/'>Accessories</Link>
      </button>
      <button
        onClick={() => routeCategory('Big & Tall')}
        className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'
      >
        <Link href='/category/'>Big & Tall</Link>
      </button>
      <button
        onClick={() => routeCategory('Sale')}
        className='px-2 py-2 font-bold text-red-500 hover:cursor-pointer hover:border-b hover:border-b-red-500'
      >
        <Link href='/category/' className='flex items-center gap-x-2' >
          <GoTag />
          Sale
        </Link>
      </button>
      <button
        onClick={() => routeCategory('Gifts')}
        className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'
      >
        <Link href='/category/'>Gifts</Link>
      </button>
      <button className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'>
        <Link href='/occasions'>Occasions</Link>
      </button>
      <button className='px-2 py-2 hover:cursor-pointer hover:border-b hover:border-b-mwblack-600'>
        <Link href='https://tuxedo.menswearhouse.com/' target='_blank' >Rental</Link>
      </button>
    </nav>
  );
}

export default NavMenu