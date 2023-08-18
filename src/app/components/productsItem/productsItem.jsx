'use client';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { cartAdd, cartRemove } from '@/app/redux/products/slice';
import { Card } from '@mui/material';
import CardSwiper from './cardSwiper/cardSwiper';
import CardDescription from './cardDescription/cardDescription';

// const 

export default function ProductsItem({ product, cart, favorite }) {
  const { id, title, subTitle, images, price, promotion } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const dispatch = useDispatch();

  const swiperRef = useRef();

  useEffect(() => {
    cart.find(item => item.id === product.id)
      ? setIsInCart(true)
      : setIsInCart(false);
  }, [cart]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCart = () => {
    if (cart.find(item => item.id === product.id)) {
      setIsInCart(true);
      dispatch(cartRemove(id));
    } else {
      setIsInCart(false);
      dispatch(cartAdd(product));
    }
  };

  const handleMouseEnter = e => {
    const target = e.target.nodeName;
    if (target === 'path' || target === 'svg') return;
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
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        transition: 'box-shadow 500ms ease-in-out',
        maxHeight: 420,
        '&:hover': {
          boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
          '& .scaleImage': {
            transform: 'scale(1.03)',
          },
        },
      }}
    >
      <CardSwiper
        promotion={promotion}
        handleFavorite={handleFavorite}
        images={images}
        isFavorite={isFavorite}
        swiperRef={swiperRef}
      />

      <CardDescription
        subTitle={subTitle}
        title={title}
        price={price}
        isInCart={isInCart}
        handleCart={handleCart}
      />
    </Card>
  );
}
