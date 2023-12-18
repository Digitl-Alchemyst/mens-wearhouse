'use client';

import ProductCard from '@/c/cards/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductSliderProps {
  products: {
    id: number;
    title: string;
    img: string;
    url: string;
    price: string;
  }[];
  directory: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  directory,
}) => {
  return (
    <div className='mx-auto max-w-[1525px]'>
      <Swiper
        spaceBetween={-35}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className='flex justify-center'>
              <ProductCard
                key={product.id}
                {...product}
                directory={directory}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
