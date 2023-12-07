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
                />
              </LinkStyled>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
