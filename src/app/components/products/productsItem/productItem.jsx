'use client';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/app/redux/modal/slice';
import { cartAdd, cartRemove } from '@/app/redux/cart/slice';
import CardSwiper from './cardSwiper/cardSwiper';
import CardDescription from './cardDescription/cardDescription';
import { Card } from './productItem.styled';

export default function ProductItem({
  product,
  cart,
  favorites,
  width,
  component = 'li',
  mb = 16,
}) {
  const [inCart, setInCart] = useState(false);
  const { id, images, promotion, status } = product;
  const isover = status === 'Out of stock' ? true : false;

  const dispatch = useDispatch();

  const swiperRef = useRef();

  useEffect(() => {
    cart.find(item => item.id === product.id)
      ? setInCart(true)
      : setInCart(false);
  }, [cart, product.id]);

  const handleCart = () => {
    if (isover) return;
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
    console.log(swiperRef);
    swiperRef.current.swiper.enabled = true;
    swiperRef.current.swiper.originalParams.autoplay.delay = 6000;
    swiperRef?.current?.swiper?.slideNext();
    swiperRef?.current?.swiper?.autoplay?.start();
    swiperRef?.current?.swiper?.pagination?.init();
  };

  const handleMouseLeave = () => {
    swiperRef?.current?.swiper?.autoplay?.stop();
    swiperRef?.current?.swiper?.pagination?.destroy();
    swiperRef?.current?.swiper?.slideTo(1, 500, false);
  };

  return (
    <Card
      component={component}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isover={isover}
      width={width}
      mb={mb}
    >
      <CardSwiper
        promotion={promotion}
        images={images}
        swiperRef={swiperRef}
        path={`/${product.category}/${product.id}`}
        id={id}
      />

      <CardDescription
        product={product}
        path={`/${product.categories}/${product.id}`}
        inCart={inCart}
        handleCart={handleCart}
        openCart={() => dispatch(toggleCart(true))}
      />
    </Card>
  );
}
