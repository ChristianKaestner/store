'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ArrowCircleRight, ArrowCircleLeft } from '@mui/icons-material';

export default function Hero() {
  const sliderRef = useRef();
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        effect={'fade'}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={it => (sliderRef.current = it)}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
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
          <Image
            src="/hookah1.jpg"
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hookah2.jpg"
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hookah3.jpg"
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hookah4.jpg"
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hookah5.jpg"
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
          />
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
