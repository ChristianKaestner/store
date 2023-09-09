'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import FavoriteIcon from '../favoriteIcon/favoriteIcon';
import { chipColor } from '@/app/utils/functions';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function CardSwiper({ promotion, images, swiperRef, path }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'calc(100% - 16px)',
        height: 200,
        m: 1,
      }}
    >
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
          width: 'calc(100% - 16px)',
          height: 200,
          paddingTop: '16px',
          '--swiper-pagination-color': '#f68e5f',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-vertical-gap': '8px',
          '--swiper-pagination-right': '18px',
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
        <FavoriteIcon />
        {images.map(image => {
          return (
            <SwiperSlide key={image}>
              <Link
                href={path}
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  className="scaleImage"
                  style={{
                    transition: 'transform 500ms ease-in-out',
                    objectFit: 'contain',
                  }}
                  src={image}
                  fill={true}
                  alt="image"
                  sizes="100%"
                  priority="false"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
