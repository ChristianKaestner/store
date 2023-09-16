'use client';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/app/redux/modal/slice';
import { cartAdd, cartRemove } from '@/app/redux/cart/slice';
import CardSwiper from './cardSwiper/cardSwiper';
import CardDescription from './cardDescription/cardDescription';
import { productPath } from '@/app/utils/functions';
import { Card } from './productItem.styled';

export default function ProductItem({ product, cart, favorites }) {
  const [inCart, setInCart] = useState(false);
  const { id, images, promotion } = product;

  const dispatch = useDispatch();

  const path = productPath(product);
  const swiperRef = useRef();

  useEffect(() => {
    cart.find(item => item.id === product.id)
      ? setInCart(true)
      : setInCart(false);
  }, [cart]);

  const handleCart = () => {
    if (cart.find(item => item.id === id)) {
      setInCart(true);
      dispatch(cartRemove(id));
    } else {
      setInCart(false);
      dispatch(cartAdd(id));
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
    >
      <CardSwiper
        promotion={promotion}
        images={images}
        swiperRef={swiperRef}
        path={path}
        id={id}
      />

      <CardDescription
        product={product}
        path={path}
        inCart={inCart}
        handleCart={handleCart}
        openCart={() => dispatch(toggleCart(true))}
      />
    </Card>
  );
}
