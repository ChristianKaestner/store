'use client';

import { useCart } from './hooks/useCart';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import { Container } from '@mui/material';
import Hero from './components/hero/hero';
import Categories from './components/categories/categories';
import ProductsList from './components/products/productsList/productsList';
import { images } from './lib/tmpData';
import { categories } from '@/app/lib/tmpData';
import { tmpUser } from './lib/tmpData';

export default function Home() {
  const { data = [], isLoading, error } = useGetAllGoodsQuery();
  const { cart } = useCart();
  const goods = data.filter(n => n.isPromoted);
  const { favorites } = tmpUser;

  return (
    <>
      <Hero images={images} />
      <Categories categories={categories} />
      <ProductsList
        goods={goods}
        isLoading={isLoading}
        cart={cart}
        favorites={favorites}
        skeleton={12}
      />
    </>
  );
}
