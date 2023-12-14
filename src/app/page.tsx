import CategorySlider from '@/components/sliders/CategorySlider';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mb-8 mt-8 flex w-full max-w-[1400px] flex-col justify-center '>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>All Clothing</h1>
      <CategorySlider />
      <div className='mt-8 flex w-full items-center justify-center border border-mwnavy-700/40 bg-mwblack-200/60 shadow-lg shadow-mwblack-800/40'>
        <Image src='/AdImage.webp' alt='' width={750} height={750} />
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <h1 className='text-7xl font-bold text-mwnavy-600'>SUIT </h1>
          <h1 className='text-7xl font-bold text-mwnavy-600'>PACKAGES</h1>
          <h2 className='mb-8 text-4xl font-bold text-mwnavy-600'>
            Starting at $379.99
          </h2>
          <button className='bg-mwnavy-600 px-4 py-2 font-semibold text-mwblack-200 shadow-md shadow-mwblack-700/60'>
            SHOP NOW
          </button>
        </div>
      </div>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Suits
      </h1>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Shirts
      </h1>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Shirts
      </h1>
      <h1 className='mb-5 py-4 text-5xl text-mwblack-800'>Brands We Love</h1>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Sports Coats & Blazers
      </h1>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Sweaters
      </h1>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Outerwear
      </h1>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>Best Selling Boys</h1>
      <h1 className='mb-5 py-4 text-4xl text-mwblack-800'>
        Guides & Tips For Your Fit
      </h1>
      <div className='flex w-full bg-mwred-500 space-x-22 justify-center px-12 py-8 items-center'>
        <h1 className='text-6xl font-bold text-zinc-100'>
          UP TO 70% OFF ORIGINAL PRICES
        </h1>
        <button className='underline px-4 py-2 font-semibold text-mwblack-100'>
          SHOP ALL
        </button>
      </div>
    </div>
  );
}
