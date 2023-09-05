'use client';
import { useState } from 'react';
import { useCart } from '@/app/hooks/useCart';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import { usePathname } from 'next/navigation';
import { Container, Box, Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/sortFilter/SortFilter';
import ProductsList from '@/app/components/products/productsList/productsList';

export default function Bowls() {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const { cart } = useCart();

  const { data = [], isLoading } = useGetAllGoodsQuery();

  const bowls = data.filter(n => n.categories === 'bowls').slice(0, 20);

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
      <PageTitle title="Bowls" />
      <SortFilter />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar goods={bowls} />

        <ProductsList
          goods={bowls}
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
