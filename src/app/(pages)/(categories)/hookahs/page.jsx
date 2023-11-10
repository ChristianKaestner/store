import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import HookahProducts from '@/app/components/products/hookahProducts/hookahProducts';
import { brandsForMetaData } from '@/app/lib/functions';

// export async function generateMetadata({ params, searchParams }) {
//   const products = await fetch(
//     `http://localhost:3001/goods?${searchParams}`
//   ).then(res => res.json());
//   const brands = brandsForMetaData(products);

//   return {
//     title: 'Hookahs - Smoke for you',
//     description: `Sale of hookahs from famous world brands ${brands} `,
//   };
// }

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Hookahs" />
      <HookahProducts />
    </>
  );
}
