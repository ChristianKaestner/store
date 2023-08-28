'use client';
// // import { useDispatch } from 'react-redux';
// import { goodsOperations } from '@/app/redux/goods/operations';
// import { useGoods } from '@/app/hooks/useGoods';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import { Container } from '@mui/material';
import Hero from './components/hero/hero';
import Categories from './components/categories/categories';
import ProductsList from './components/products/productsList/productsList';
import { images } from '../app/utils/tmpData';
import { categories } from '@/app/utils/tmpData';

export default function Home() {
  const { data = [], isLoading, error } = useGetAllGoodsQuery();
  const goods = data.filter(n => n.isPromoted);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 12, mb: 2 }}
    >
      <Hero images={images} />
      <Categories categories={categories} />
      <ProductsList
        goods={goods}
        isLoading={isLoading}
        cart={[]}
        favorite={[]}
      />
    </Container>
  );
}
