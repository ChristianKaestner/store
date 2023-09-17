'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, IconButton, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { swiperStyles, IconBtnNavigate } from '@/app/lib/commonStyles';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero({ images }) {
  const sliderRef = useRef();
  return (
    <Box component="section">
      <Typography component="h1" sx={visuallyHidden}>
        Best hookah in the world!
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
        style={swiperStyles}
      >
        <IconBtnNavigate
          prev={0}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconBtnNavigate>
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
        <IconBtnNavigate
          next={0}
          onClick={() => sliderRef.current?.slideNext()}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconBtnNavigate>
      </Swiper>
    </Box>
  );
}
