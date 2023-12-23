import GoogleMap from '@/components/GoogleMap';
import MapBox from '@/components/MapBox';
import MapGL from '@/components/MapGL';
import Link from 'next/link';
import { notFound } from 'next/navigation';


type Props = {
  params: {
    loc: string;
  };
};




function SearchPage({ params: { loc } }: Props) {
  if (!loc) notFound();

  return (
    <main className='mb-8 mt-8 flex w-full max-w-[1400px] flex-col space-y-2'>
      {/* Search Header  */}
      <section>
        <div className='flex space-x-1'>
          <Link href='/' className='underline'>
            Home
          </Link>
          <p>{'>'}</p>
          <Link href='/store-locator' className='underline'>
            Store Locator
          </Link>
          <p>{'>'}</p>
          <p>{loc}</p>
        </div>
        <div className='flex items-end space-x-2 py-2'>
          <h1 className='text-4xl'>Stores Near {loc}</h1>
          <p className='font-light'>(# of Stores)</p>
        </div>
      </section>

      <div className='border-b border-mwblack-400/40 pt-6' />

      <section>
        <div>
          {/* Banner  */}
          <div className='bg-mwnavy-500'>
            <h1 className='text-5xl font-semibold text-zinc-100 py-10 px-4 rounded-sm shadow-sm'>Find a Men&apos;s Wearhouse Store Near You</h1>
          </div>
          {/* Map */}
          <GoogleMap />
          <div>Search Box</div>
        </div>
      </section>
    </main>
  );
}

export default SearchPage;
