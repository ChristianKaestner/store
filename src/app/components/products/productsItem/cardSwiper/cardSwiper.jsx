'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import FavoriteIcon from '../favoriteIcon/favoriteIcon';
import { chipColor } from '@/app/lib/functions';
import { swiperStyles } from '@/app/lib/commonStyles';
import { Container, LinkStyled, ImageStyled } from './cardSwiper.styled';
import { ChipStyled } from './cardSwiper.styled';
import { PRODUCT_IMAGE_URL } from '@/app/lib/constants';
import { shimmer, toBase64 } from './utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Box } from '@mui/material';

export default function CardSwiper({
  promotion,
  images,
  swiperRef,
  path,
  id,
  isFavorite,
}) {
  const color = chipColor(promotion);
  const lg = useMediaQuery('(min-width:1200px)');
  return (
    <Container>
      {lg ? (
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          effect={'fade'}
          slidesPerView={1}
          ref={swiperRef}
          direction="vertical"
          enabled={true}
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
                    priority={index === 0 ? true : false}
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(200, 200)
                    )}`}
                  />
                </LinkStyled>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          {promotion.promotion !== 'none' && (
            <ChipStyled label={promotion.promotion} color={color} />
          )}
          <FavoriteIcon id={id} isFavorite={isFavorite} />
          <LinkStyled href={path}>
            <ImageStyled
              className="scaleImage"
              src={PRODUCT_IMAGE_URL + images[0]}
              fill={true}
              alt="image"
              sizes="100%"
              priority={true}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
              )}`}
            />
          </LinkStyled>
        </Box>
      )}
    </Container>
  );
}
