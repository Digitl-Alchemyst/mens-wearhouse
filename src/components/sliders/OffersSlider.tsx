'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const offers = [
  {
    id: 1,
    offer: 'Clearance Up To 70% Off',
    cta: 'Shop Now',
    url: 'https://www.menswearhouse.com/c/mens-clothing-sale/clearance',
  },
  {
    id: 2,
    offer: 'Free Standard Shipping on $99+',
    cta: 'Free Returns',
    url: 'https://www.menswearhouse.com/slc/help-faqs#shppng-nd-hndlng',
  },
  {
    id: 3,
    offer: 'Wedding',
    cta: 'Learn More',
    url: 'https://www.menswearhouse.com/shop/wedding-outfit-gallery',
  },
];

function OffersSlider() {
  return (
    <div className='text-sm'>
      <Swiper
        direction='vertical'
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={500}
        // navigation={true}
        // scrollbar={{ draggable: true, hide: true }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        className='offerSwiper hover:cursor-default'
      >
        {offers.map((offer, id) => (
          <SwiperSlide key={offer.id}>
            <p className='flex items-center justify-center text-mwblack-700'>
              {offer.offer} |{' '}
              <Link href={offer.url}>
                <span className='ml-1 font-bold text-mwblack-800'>
                  {offer.cta}
                </span>
              </Link>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OffersSlider;
