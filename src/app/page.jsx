import Hero from './components/hero/hero';
import Categories from './components/categories/categories';
import ProductsList from './components/products/productsList/productsList';
import { images } from './lib/tmpData';
import { categories } from '@/app/lib/tmpData';

export const metadata = {
  title: 'Home',
  description: 'User table, you can retrieve data, add as well as edit. ',
};

export default function Home() {
  return (
    <>
      <Hero images={images} />
      <Categories categories={categories} />
      <ProductsList
        promoted={true}
        skeleton={12}
        component="h4"
        title="Hot deals on hookahs, tobacco, coal and accessories "
      />
    </>
  );
}
