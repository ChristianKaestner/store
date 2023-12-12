'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { swiperStyles } from '@/app/lib/commonStyles';
import { NavigateNext, NavigatePrev } from '../navigateBtn/navigateBtn';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="20%" style="stop-color:#000000B3; stop-opacity:1" />
      <stop offset="50%" style="stop-color:#333333B3; stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#000000B3; stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#shimmerGradient)" />
  <rect id="shimmerRect" width="${w}" height="${h}" fill="url(#shimmerGradient)">
    <animate attributeName="x" values="-${w}; ${w}" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>`;

const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Hero({ images }) {
  const sliderRef = useRef();
  const xs = useMediaQuery('(max-width:599px)');
  return (
    <Box component="section" sx={{ opacity: 0.9 }}>
      <Typography component="h1" sx={visuallyHidden}>
        Buy hookah and accessories here
      </Typography>
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
        style={{ ...swiperStyles, height: xs ? '240px' : '400px' }}
      >
        <NavigatePrev
          prev={() => sliderRef.current?.slidePrev()}
          color="white"
        />
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image.uri}>
              <Image
                src={image.uri}
                fill={true}
                alt="image"
                sizes="100%"
                priority={index === 0 ? true : false}
                style={{ objectFit: 'cover' }}
                quality={50}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(1448, 400)
                )}`}
              />
            </SwiperSlide>
          );
        })}
        <NavigateNext
          next={() => sliderRef.current?.slideNext()}
          color="white"
        />
      </Swiper>
    </Box>
  );
}
