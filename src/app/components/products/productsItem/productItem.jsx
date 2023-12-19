'use client';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '@/app/hooks/useAuth';
import { useCart } from '@/app/hooks/useCart';
import { useFavorite } from '@/app/hooks/useFavorite';
import { addCart, deleteCart } from '@/app/redux/cart/operations';
import { toggleCart } from '@/app/redux/modal/slice';
import { cartAdd, cartRemove } from '@/app/redux/cart/slice';
import CardSwiper from './cardSwiper/cardSwiper';
import CardDescription from './cardDescription/cardDescription';
import { Card } from './productItem.styled';

export default function ProductItem({ product, component = 'li', mb = 16 }) {
  const [inCart, setInCart] = useState(false);
  const { cart, cartProducts, isLoading } = useCart();
  const { isLogin } = useAuth();
  const { favoriteIds = [] } = useFavorite();
  const { id, images, promotion, status } = product;
  const isover = status === 'Out of stock' ? true : false;
  const isFavorite = favoriteIds.includes(id);

  const dispatch = useDispatch();
  const swiperRef = useRef();

  useEffect(() => {
    if (isLogin) {
      setInCart(!!cartProducts.find(i => i.id === id));
    } else {
      setInCart(!!cart.find(i => i.productId === id));
    }
  }, [cart, cartProducts, isLogin, id, isLoading]);

  const handleAddCart = () => {
    if (isover) return;
    setInCart(true);
    if (isLogin) {
      const payload = { items: [{ productId: id, quantity: 1 }] };
      dispatch(addCart(payload));
    } else {
      dispatch(cartAdd(id));
    }
  };
  const handleDeleteCart = () => {
    setInCart(false);
    if (isLogin) {
      dispatch(deleteCart(id));
    } else {
      dispatch(cartRemove(id));
    }
  };

  const handleMouseEnter = e => {
    if (swiperRef?.current?.swiper) {
      const target = e.target.nodeName;
      if (target === 'path' || target === 'svg') return;
      swiperRef.current.swiper.enabled = true;
      swiperRef.current.swiper.originalParams.autoplay.delay = 6000;
      swiperRef?.current?.swiper?.slideNext();
      swiperRef?.current?.swiper?.autoplay?.start();
      swiperRef?.current?.swiper?.pagination?.init();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef?.current?.swiper?.autoplay?.stop();
      swiperRef?.current?.swiper?.pagination?.destroy();
      swiperRef?.current?.swiper?.slideTo(0, 500, false);
    }
  };

  return (
    <Card
      component={component}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isover={isover}
      mb={mb}
    >
      <CardSwiper
        promotion={promotion}
        images={images}
        swiperRef={swiperRef}
        path={`/${product.category}/${product.id}`}
        id={id}
        isFavorite={isFavorite}
      />

      <CardDescription
        product={product}
        path={`/${product.category}/${product.id}`}
        inCart={inCart}
        handleAddCart={handleAddCart}
        handleDeleteCart={handleDeleteCart}
        openCart={() => dispatch(toggleCart(true))}
      />
    </Card>
  );
}
