'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { goodsOperations } from '@/app/redux/goods/operations';
import { useGoods } from '@/app/hooks/useGoods';
import { Container } from '@mui/material';
import Hero from './components/hero/hero';
import Categories from './components/categories/categories';
import ProductsList from './components/products/productsList/productsList';
import { images } from '../app/utils/tmpData';
import { categories } from '@/app/utils/tmpData';

export default function Home() {
  const dispatch = useDispatch();
  const { promotedGoods, isLoading, cart, favorite } = useGoods();
  console.log(promotedGoods);
  useEffect(() => {
    dispatch(goodsOperations.fetchPromotedGoods());
  }, [dispatch]);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 12, mb: 2 }}
    >
      <Hero images={images} />
      <Categories categories={categories} />
      <ProductsList
        products={promotedGoods}
        isLoading={isLoading}
        cart={cart}
        favorite={favorite}
      />
    </Container>
  );
}
