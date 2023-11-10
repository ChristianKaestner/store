import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import CoalProducts from '@/app/components/products/coalProducts/coalProducts';
import { brandsForMetaData } from '@/app/lib/functions';

// export async function generateMetadata({ params, searchParams }) {
//   const products = await fetch(
//     `http://localhost:3001/goods?${searchParams}`
//   ).then(res => res.json());
//   const brands = brandsForMetaData(products);

//   return {
//     title: 'Coals - Smoke for you',
//     description: `Sale of hookah coal from famous world brands ${brands} `,
//   };
// }

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Coals" />
      <CoalProducts />
    </>
  );
}
