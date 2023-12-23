import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const decodedTerm = decodeURI(term);

  return (
    <main className='mb-8 mt-8 flex w-full max-w-[1400px] flex-col space-y-2'>
      {/* Search Header  */}
      <section>
        <div className='flex space-x-1'>
          <Link href='/' className='underline'>
            Home
          </Link>
          <p>{'>'}</p>
          <Link href='/search' className='underline'>
            Search
          </Link>
          <p>{'>'}</p>
          <p>{decodedTerm}</p>
        </div>
        <div className='flex items-end space-x-2 py-2'>
          <h1 className='text-4xl'>&apos;{decodedTerm}&apos;</h1>
          <p className='font-light'>(# of Results)</p>
        </div>
      </section>

      <div className='border-b border-mwblack-400/40 pt-6' />

      {/* Filters & Sorting  */}

      <section className='flex  justify-between'>
        {/* Filters  */}
        <div className='flex space-x-4'>
          {/* Sort  */}
          <p>Sort</p>
          <div className='border-r border-mwblack-400/40 pt-6' />
          {/* Filters  */}
          <p>Filters</p>
          <div className='border-r border-mwblack-400/40 pt-6' />
          {/* Single Filters */}
          <div className='flex space-x-3'>
            <p>Color</p>
            <p>Size</p>
            <p>Type</p>
            <p>Brand</p>
            <p>Occasion</p>
            <p>Price</p>
          </div>
        </div>

        {/* Filter Switches  */}
        <div className=''>
          {/* Pick up at Store  */}
          Pick up at Store (# of items avalible)
          {/* Display Toggle  */}
        </div>
      </section>

      <div className='border-b border-mwblack-400/40 pt-6' />

      {/* Search Results  */}
      <section>{/* Map through search results with product card  */}</section>
    </main>
  );
}

export default SearchPage;
