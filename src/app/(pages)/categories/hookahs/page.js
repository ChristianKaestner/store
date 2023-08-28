'use client';
import { useState, useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// import { goodsOperations } from '@/app/redux/goods/operations';
// import { useGoods } from '@/app/hooks/useGoods';
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
  // const dispatch = useDispatch();
  // const { goods, isLoading, cart, favorite } = useGoods();

  // useEffect(() => {
  //   dispatch(goodsOperations.fetchGoods());
  // }, [dispatch]);

  const { data = [], isLoading, error } = useGetGoodsQuery(limit);

  const path = usePathname().split('/');
  path.splice(0, 1);

  // const pagination = data.

  const handlePage = value => {
    setPage(value);
  };

  const handleRefresh = () => {
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
          price={true}
          brands={true}
          color={true}
          status={true}
          weight={true}
        />

        <ProductsList
          goods={data}
          isLoading={isLoading}
          cart={[]}
          favorite={[]}
          pagination={2}
          page={page}
          onPage={handlePage}
          onRefresh={handleRefresh}
        />
      </Box>
    </Container>
  );
}
