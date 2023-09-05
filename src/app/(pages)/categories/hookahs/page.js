'use client';
import { useState, useEffect } from 'react';
import { useCart } from '@/app/hooks/useCart';
import { useGetGoodsQuery } from '@/app/redux/services/goods';
import { usePathname } from 'next/navigation';
import { Container, Box, Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/sortFilter/SortFilter';
import ProductsList from '@/app/components/products/productsList/productsList';

export default function Hookahs() {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const { cart } = useCart();

  const { data = [], isLoading } = useGetGoodsQuery(limit);

  const path = usePathname().split('/');
  path.splice(0, 1);

  const handlePage = value => {
    setPage(value);
  };

  const handleLoadMore = () => {
    //load more
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 12, mb: 2 }}
    >
      <Breadcrumbs crumbs={path} />
      <PageTitle title="Hookahs" />
      <SortFilter />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar
          goods={data}
          price={true}
          brands={true}
          color={true}
          status={true}
          weight={true}
        />

        <ProductsList
          goods={data}
          isLoading={isLoading}
          cart={cart}
          favorite={[]}
          pagination={2}
          page={page}
          onPage={handlePage}
          onLoadMore={handleLoadMore}
          skeleton={20}
        />
      </Box>
    </Container>
  );
}
