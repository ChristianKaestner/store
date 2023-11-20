import Hero from './components/hero/hero';
import Categories from './components/categories/categories';
import PromotedProducts from '@/app/components/products/promotedProducts/promotedProducts';
import { images } from './lib/tmpData';

export const metadata = {
  title: 'Home',
  description: 'User table, you can retrieve data, add as well as edit. ',
};

export default function Home() {
  return (
    <>
      <Hero images={images} />
      <Categories />
      <PromotedProducts />
    </>
  );
}
