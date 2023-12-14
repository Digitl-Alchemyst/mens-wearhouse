import CategorySlider from '@/components/sliders/CategorySlider';
import ProductSlider from '@/components/sliders/ProductSlider';
import Image from 'next/image';
import {
  bestSellingSuits,
  bestSellingShirts,
  bestSellingBoys,
  bestSellingOuterwear,
  bestSellingSweaters,
  bestSellingBlazers,
  bestSellingPants,
  fitGuides,
  brandsWeLove,
} from '#/constants';
import GuideSlider from '@/components/sliders/GuideSlider';
import BrandsSlider from '@/components/sliders/BrandsSlider';

const suits = bestSellingSuits;
const shirts = bestSellingShirts;
const blazers = bestSellingBlazers;
const sweaters = bestSellingSweaters;
const outerwear = bestSellingOuterwear;
const boys = bestSellingBoys;
const pants = bestSellingPants;
const guides = fitGuides;
const brands = brandsWeLove;

export default function Home() {
  return (
    <div className='mb-8 mt-8 flex w-full max-w-[1400px] flex-col justify-center '>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>All Clothing</h1>
      <CategorySlider />
      <div className='mb-6 mt-8 flex w-full items-center justify-center rounded-sm border border-mwnavy-700/40 bg-mwblack-200/60 shadow-lg shadow-mwblack-800/40'>
        <Image
          src='/AdImage.webp'
          alt=''
          width={750}
          height={750}
          className='rounded-sm'
        />
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <h1 className='text-7xl font-bold text-mwnavy-600'>SUIT </h1>
          <h1 className='text-7xl font-bold text-mwnavy-600'>PACKAGES</h1>
          <h2 className='mb-8 text-4xl font-bold text-mwnavy-600'>
            Starting at $379.99
          </h2>
          <button className='rounded-sm bg-mwnavy-600 px-4 py-2 font-semibold text-mwblack-200 shadow-md shadow-mwblack-700/60'>
            SHOP NOW
          </button>
        </div>
      </div>
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Suits
      </h1>
      <ProductSlider products={suits} directory='suits' />
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Shirts
      </h1>
      <ProductSlider products={shirts} directory='shirts' />
      <h1 className='mb-5 py-4 text-5xl text-mwblack-800'>Brands We Love</h1>
      <BrandsSlider products={brands} directory='brands' />
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Sports Coats & Blazers
      </h1>
      <ProductSlider products={blazers} directory='blazers' />
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Sweaters
      </h1>
      <ProductSlider products={sweaters} directory='sweaters' />
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>
        Best Selling Outerwear
      </h1>
      <ProductSlider products={outerwear} directory='outerwear' />
      <h1 className='mb-5 py-4 text-2xl text-mwblack-800'>Best Selling Boys</h1>
      <ProductSlider products={boys} directory='boys' />
      <h1 className='mb-5 mt-8 py-4 text-4xl text-mwblack-800'>
        Guides & Tips For Your Fit
      </h1>
      <GuideSlider products={guides} directory='guides' />
      <div className='mt-4 flex w-full items-center justify-center space-x-22 rounded-sm bg-mwred-500 px-12 py-8 shadow-md shadow-mwblack-600/50'>
        <h1 className='text-6xl font-bold text-zinc-100'>
          UP TO 70% OFF ORIGINAL PRICES
        </h1>
        <button className='px-4 py-2 font-semibold text-mwblack-100 underline'>
          SHOP ALL
        </button>
      </div>
    </div>
  );
}
