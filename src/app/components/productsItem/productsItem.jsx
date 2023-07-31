'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Typography, IconButton, Box } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ProductsItem({ id, promotion, price, title, images }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);

  const swiperRef = useRef();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCart = () => {
    setInCart(!inCart);
  };

  const handleMouseEnter = () => {
    swiperRef.current.swiper.enabled = true;
    swiperRef.current.swiper.originalParams.autoplay.delay = 6000;
    swiperRef?.current?.swiper?.slideNext();
    swiperRef?.current?.swiper?.autoplay?.start();
    swiperRef?.current?.swiper?.pagination?.init();
  };

  const handleMouseLeave = () => {
    swiperRef?.current?.swiper?.autoplay?.stop();
    swiperRef?.current?.swiper?.pagination?.destroy();
    swiperRef?.current?.swiper?.slideTo(0, 500, false);
  };
  return (
    <Card
      component="section"
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        transition: 'box-shadow 500ms ease-in-out',
        '&:hover': {
          boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
          '& .scaleImage': {
            transform: 'scale(1.03)',
          },
        },
      }}
    >
      {/* <Typography component="h2">Products list</Typography> */}
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
            '--swiper-pagination-color': '#f68e5f',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '12px',
            '--swiper-pagination-bullet-vertical-gap': '8px',
            '--swiper-pagination-right': '18px',
          }}
        >
          {promotion && (
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                left: 0,
                zIndex: 2,
                background: '#f5dd90',
                borderRadius: 2,
                color: '#fff',
              }}
            >
              <Typography sx={{ p: 0.5 }}>{promotion}</Typography>
            </Box>
          )}
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
            onClick={handleFavorite}
          >
            {isFavorite ? (
              <FavoriteOutlinedIcon sx={{ fontSize: 30, color: '#f68e5f' }} />
            ) : (
              <FavoriteBorderOutlinedIcon
                sx={{ fontSize: 30, fill: '#f68e5f' }}
              />
            )}
          </IconButton>
          {images.map(image => {
            return (
              <SwiperSlide key={image}>
                <Image
                  className="scaleImage"
                  style={{ transition: 'transform 500ms ease-in-out' }}
                  src={image}
                  fill={true}
                  alt="image"
                  sizes="100%"
                  priority="false"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Link href="/">
        <CardHeader title={title} component="h3" />
      </Link>

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
          sx={{ fontWeight: 700, fontSize: 30, color: '#f76c5e' }}
        >
          {price}$
        </Typography>
        <IconButton onClick={handleCart}>
          {inCart ? (
            <ShoppingCartCheckoutOutlinedIcon
              sx={{ fontSize: 30, fill: '#f68e5f' }}
            />
          ) : (
            <AddShoppingCartOutlinedIcon
              sx={{ fontSize: 30, fill: '#f68e5f' }}
            />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
}
