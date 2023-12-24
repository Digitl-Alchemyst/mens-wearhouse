import { bestSellingBlazers, bestSellingBoys, bestSellingOuterwear, bestSellingPants, bestSellingShirts, bestSellingSuits, bestSellingSweaters } from '#/constants';
import Filters from '@/components/global/Filters';
import LgProductDisplay from '@/components/sliders/LgProductDisplay';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

type Props = {
  params: {
    category: string;
  };
};

const suits = bestSellingSuits;
const shirts = bestSellingShirts;
const blazers = bestSellingBlazers;
const sweaters = bestSellingSweaters;
const outerwear = bestSellingOuterwear;
const boys = bestSellingBoys;
const pants = bestSellingPants;


function SearchPage({ params: { category } }: Props) {
  if (!category) notFound();

  const decodedCategory = decodeURIComponent(category);

  return (
    <main className='mb-8 mt-8 flex w-full max-w-[1400px] flex-col space-y-2'>
      {/* Search Header  */}
      <section>
        <div className='flex space-x-1'>
          <Link href='/' className='underline'>
            Home
          </Link>
          <p>{'>'}</p>
          <p>{decodedCategory}</p>
        </div>
        <div className='flex items-end space-x-2 py-2'>
          <h1 className='text-4xl'>&apos;{decodedCategory}&apos;</h1>
          <p className='font-light'>(# of Results)</p>
        </div>
      </section>

      <div className='border-b border-mwblack-400/40 pt-6' />

      {/* Filters & Sorting  */}
      <Filters />
      
      <div className='border-b border-mwblack-400/40 pt-6' />

      {/* Search Results  */}
      <LgProductDisplay products={suits} directory='suits' />
    </main>
  );
}

export default SearchPage;
