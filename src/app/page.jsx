import Hero from './components/hero/hero';
import Categories from './components/categories/categories';
import PromotedProducts from '@/app/components/products/promotedProducts/promotedProducts';
import { images } from './lib/utils';

export default function Home() {
  return (
    <>
      <Hero images={images} />
      <Categories />
      <PromotedProducts />
    </>
  );
}
