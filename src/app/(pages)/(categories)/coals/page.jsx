import { Box } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import CoalProducts from '@/app/components/products/coalProducts/coalProducts';
import ProductsList from '@/app/components/products/productsList/productsList';
import Sortbar from '@/app/components/filters/sortbar/sortbar';
import { brandsForMetaData } from '@/app/lib/functions';
import FiltersMenu from '@/app/components/filters/filtersMenu/filtersMenu';
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <FiltersMenu category="coals" />
        <SortFilter />
      </Box>
      <CoalProducts />
    </>
  );
}
