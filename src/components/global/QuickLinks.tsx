import { FaRegHeart } from 'react-icons/fa';
import { LiaShoppingBagSolid } from 'react-icons/lia';

import Link from 'next/link';
import AccountButton from './AccountButton';

const QuickLinks = () => {
  return (
    <div className='flex space-x-4'>
        <AccountButton />
      <Link href='/wishlist'>
        <FaRegHeart className='h-5 w-5' />
      </Link>
      <Link href='/shopping-bag'>
        <LiaShoppingBagSolid className='h-5 w-5' />
      </Link>
    </div>
  );
};

export default QuickLinks;
