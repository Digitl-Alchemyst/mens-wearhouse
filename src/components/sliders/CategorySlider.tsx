'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { categorySlider } from '#/constants';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const categoryData = categorySlider;

const CategorySlider = () => {
  return (
    <div className='max-w-[1500px]'>
      <Swiper
        spaceBetween={-40}
        slidesPerView={6}
        navigation={true}
        modules={[Navigation]}
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categoryData.map((category, id) => (
          <SwiperSlide key={category.id}>
            <div className='flex items-center justify-center'>
              <Link
                href={category.url}
                className='flex flex-col items-center justify-center space-y-4'
              >
                <div className='relative h-50 w-50 rounded-full'>
                  <Image
                    src={`/category/${category.img}`}
                    alt='FullCard Image'
                    fill
                    className='rounded-full border border-mwnavy-300/70 object-cover shadow-lg shadow-mwblack-800/40'
                  />
                </div>
                <h5>{category.title}</h5>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
