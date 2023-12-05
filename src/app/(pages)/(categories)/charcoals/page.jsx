import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import CoalProducts from '@/app/components/products/coalProducts/coalProducts';

export const metadata = {
  title: 'Smokey - Hookah charcoal',
  description:
    'Coconut charcoal for shisha. Hookah coals from famous brand: crown, cocoloco, panda, phoenix, tom coco. Coal 25mm. Coal 26mm.',
};

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Сharcoals" />
      <CoalProducts />
    </>
  );
}
