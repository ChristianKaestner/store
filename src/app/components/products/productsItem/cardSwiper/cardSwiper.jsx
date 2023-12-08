'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import FavoriteIcon from '../favoriteIcon/favoriteIcon';
import { chipColor } from '@/app/lib/functions';
import { swiperStyles } from '@/app/lib/commonStyles';
import { Container, LinkStyled, ImageStyled } from './cardSwiper.styled';
import { ChipStyled } from './cardSwiper.styled';
import { PRODUCT_IMAGE_URL } from '@/app/lib/constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="20%" style="stop-color:#001219; stop-opacity:1" />
      <stop offset="50%" style="stop-color:#002233; stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#001219; stop-opacity:1" />
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

export default function CardSwiper({
  promotion,
  images,
  swiperRef,
  path,
  id,
  isFavorite,
}) {
  const color = chipColor(promotion);

  return (
    <Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        slidesPerView={1}
        ref={swiperRef}
        direction="vertical"
        enabled={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        style={{
          ...swiperStyles,
          height: '100%',
        }}
      >
        {promotion.promotion !== 'none' && (
          <ChipStyled label={promotion.promotion} color={color} />
        )}
        <FavoriteIcon id={id} isFavorite={isFavorite} />
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image}>
              <LinkStyled href={path}>
                <ImageStyled
                  className="scaleImage"
                  src={PRODUCT_IMAGE_URL + image}
                  fill={true}
                  alt="image"
                  sizes="100%"
                  priority={index === 0 ? 'true' : 'false'}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(200, 200)
                  )}`}
                />
              </LinkStyled>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
