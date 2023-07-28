'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { ImageStyled, StyledCard } from './productsItem.styled';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Typography, IconButton, Box, Tooltip } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// const items = [
//   {
//     id: 1,
//     images: ['/hookah_item.jpg', '/hookah_item2.jpg'],
//     title: 'Hookah',
//     price: 100,
//   },
// ];

export default function ProductsItem({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const swiperRef = useRef();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleMouseEnter = () => {
    console.log('Mouse in');
    swiperRef.current.swiper.originalParams.autoplay.delay = 6000;
    swiperRef?.current?.swiper?.autoplay?.start();
  };

  const handleMouseLeave = () => {
    console.log('Mouse out');
    swiperRef?.current?.swiper?.autoplay?.stop();
  };
  return (
    <Card
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          style={{ width: 'calc(100% - 16px)', height: 200 }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
            onClick={handleFavorite}
          >
            {isFavorite ? (
              <Tooltip title="Remove from favorite">
                <FavoriteOutlinedIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Add to favorite">
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
            )}
          </IconButton>
          <SwiperSlide>
            <ImageStyled
              src="/hookah_item.jpg"
              fill={true}
              alt="image"
              sizes="100%"
              priority="false"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageStyled
              src="/hookah_item2.jpg"
              fill={true}
              alt="image"
              sizes="100%"
              priority="false"
            />
          </SwiperSlide>
        </Swiper>
      </Box>

      <CardHeader title="Hookah Mia" component="h3" />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: 700, fontSize: 30 }}
        >
          100$
        </Typography>
        <IconButton>
          <AddShoppingCartOutlinedIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
