import { Box } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import AccessoriesProducts from '@/app/components/products/accessoryProducts/accessoryProducts';
import Sortbar from '@/app/components/filters/sortbar/sortbar';
import { brandsForMetaData } from '@/app/lib/functions';
import FiltersMenu from '@/app/components/filters/filtersMenu/filtersMenu';

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <FiltersMenu category="accessories" />
        <SortFilter />
      </Box>

      <AccessoriesProducts />
    </>
  );
}
