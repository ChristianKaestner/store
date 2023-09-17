'use client';

import { Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import FavoriteIcon from '../favoriteIcon/favoriteIcon';
import { chipColor } from '@/app/lib/functions';
import { swiperStyles } from '@/app/lib/commonStyles';
import { Container, LinkStyled, ImageStyled } from './cardSwiper.styled';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function CardSwiper({ promotion, images, swiperRef, path, id }) {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
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
          height: 200,
        }}
      >
        {promotion && (
          <Chip
            label={promotion}
            sx={{
              position: 'absolute',
              top: 4,
              left: 0,
              zIndex: 1,
              bgcolor: chipColor(promotion),
              '&.MuiChip-root': {
                span: {
                  color: '#fff',
                },
              },
            }}
          />
        )}
        <FavoriteIcon id={id} />
        {images.map(image => {
          return (
            <SwiperSlide key={image}>
              <LinkStyled href={path}>
                <ImageStyled
                  className="scaleImage"
                  src={image}
                  fill={true}
                  alt="image"
                  sizes="100%"
                  priority="false"
                />
              </LinkStyled>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
