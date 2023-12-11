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
