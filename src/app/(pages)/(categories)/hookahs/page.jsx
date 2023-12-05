import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import HookahProducts from '@/app/components/products/hookahProducts/hookahProducts';

export const metadata = {
  title: 'Smokey - Hookahs',
  description:
    'Hookahs from the most famous brands: Amy, Mya, Wookah, Golden Desert, Lavoo, Oduman',
};

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Hookahs" />
      <HookahProducts />
    </>
  );
}
