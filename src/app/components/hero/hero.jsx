'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowCircleRight, ArrowCircleLeft } from '@mui/icons-material';

export default function Hero() {
  const sliderRef = useRef();
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 25000,
          //   disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        onSwiper={it => (sliderRef.current = it)}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        style={{ width: '100%', height: '400px', background: 'green' }}
      >
        <ArrowCircleLeft
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 50,
            height: 400,
            color: '#fff',
            zIndex: 100,
          }}
          onClick={() => sliderRef.current?.slidePrev()}
        />
        <SwiperSlide>
          <Image src="/hookah1.jpg" width="1000" height="400" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/hookah2.jpg" width="1000" height="400" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/hookah3.jpg" width="1000" height="400" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/hookah4.jpg" width="1000" height="400" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/hookah5.jpg" width="1000" height="400" alt="image" />
        </SwiperSlide>
        <ArrowCircleRight
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 50,
            height: 400,
            color: '#fff',
            zIndex: 100,
          }}
          onClick={() => sliderRef.current?.slideNext()}
        />
      </Swiper>
    </>
  );
}
