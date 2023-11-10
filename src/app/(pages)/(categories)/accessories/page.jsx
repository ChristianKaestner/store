import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import AccessoriesProducts from '@/app/components/products/accessoryProducts/accessoryProducts';
import { brandsForMetaData } from '@/app/lib/functions';

// export async function generateMetadata({ params, searchParams }) {
//   const products = await fetch(
//     `http://localhost:3001/goods?${searchParams}`
//   ).then(res => res.json());
//   const brands = brandsForMetaData(products);

//   return {
//     title: 'Bowls - Smoke for you',
//     description: `Sale of hookah bowls from famous world brands ${brands} `,
//   };
// }

export default function Accessories() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Accessories" />
      <AccessoriesProducts />
    </>
  );
}
