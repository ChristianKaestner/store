import { Box, Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import ProductsList from '@/app/components/products/productsList/productsList';
import Sortbar from '@/app/components/filters/sortbar/sortbar';
import { brandsForMetaData } from '@/app/lib/functions';

export async function generateMetadata({ params, searchParams }) {
  const products = await fetch(
    `http://localhost:3001/goods?${searchParams}`
  ).then(res => res.json());
  const brands = brandsForMetaData(products);

  return {
    title: 'Hookahs - Smoke for you',
    description: `Sale of hookahs from famous world brands ${brands} `,
  };
}

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Hookahs" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Sortbar />
        <SortFilter />
      </Box>

      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Sidebar category={'hookahs'} />
        <ProductsList
          category={'hookahs'}
          pagination={2}
          skeleton={20}
          title="Large variety of hookahs"
        />
      </Box>
    </>
  );
}
