'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowCircleRight, ArrowCircleLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero({ images }) {
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
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={it => (sliderRef.current = it)}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        style={{
          width: '100%',
          height: '400px',
          '--swiper-pagination-color': '#f68e5f',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-horizontal-gap': '8px',
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 'calc(50% - 25px)',
            left: 0,
            width: 50,
            height: 50,
            color: '#fff',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          <ArrowCircleLeft sx={{ fontSize: 40 }} />
        </IconButton>
        {images.map(image => {
          return (
            <SwiperSlide key={image.uri}>
              <Image
                src={image.uri}
                fill={true}
                alt="image"
                sizes="100%"
                priority="false"
              />
            </SwiperSlide>
          );
        })}
        <IconButton
          sx={{
            position: 'absolute',
            top: 'calc(50% - 25px)',
            right: 0,
            width: 50,
            height: 50,
            color: '#fff',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={() => sliderRef.current?.slideNext()}
        >
          <ArrowCircleRight sx={{ fontSize: 40 }} />
        </IconButton>
      </Swiper>
    </>
  );
}
