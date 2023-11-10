import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import TobaccoProducts from '@/app/components/products/tobaccoProducts/tobaccoProducts';
import { brandsForMetaData } from '@/app/lib/functions';

// export async function generateMetadata({ params, searchParams }) {
//   const products = await fetch(
//     `http://localhost:3001/goods?${searchParams}`
//   ).then(res => res.json());
//   const brands = brandsForMetaData(products);

//   return {
//     title: 'Tobacco - Smoke for you',
//     description: `Sale of hookah tobacco from famous world brands ${brands} `,
//   };
// }

export default function Tobacco() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Tobacco" />
      <TobaccoProducts />
    </>
  );
}
