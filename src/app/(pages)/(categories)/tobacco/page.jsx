import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import TobaccoProducts from '@/app/components/products/tobaccoProducts/tobaccoProducts';

export const metadata = {
  title: 'Smokey - Hookah tobacco',
  description:
    'Hookahs tobacco from the most famous brands: All Fakher, Adalya, Bali, Fumari, Serbetli ',
};

export default function Tobacco() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Tobacco" />
      <TobaccoProducts />
    </>
  );
}
