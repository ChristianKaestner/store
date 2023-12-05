import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import AccessoriesProducts from '@/app/components/products/accessoryProducts/accessoryProducts';

export const metadata = {
  title: 'Smokey - Hookah accessories',
  description:
    'Hookah hose. Hookah bowl. Hookah flask. Hookah stem. Hookah case. Hookah tongs. Hookah Charcoal holder. Hookah cleaners.',
};

export default function Accessories() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Accessories" />
      <AccessoriesProducts />
    </>
  );
}
