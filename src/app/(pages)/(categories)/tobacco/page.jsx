'use client';

import { useState } from 'react';
import { useCart } from '@/app/hooks/useCart';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import { usePathname } from 'next/navigation';
import { Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import ProductsList from '@/app/components/products/productsList/productsList';
import Sortbar from '@/app/components/filters/sortbar/sortbar';
import { Row, RowBetween } from '@/app/lib/commonStyles';

export default function Tobacco() {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const { cart } = useCart();

  const { data = [], isLoading } = useGetAllGoodsQuery();

  const tobacco = data.filter(n => n.categories === 'tobacco').slice(0, 20);

  const path = usePathname().split('/');
  path.splice(0, 1);

  const handlePage = value => {
    setPage(value);
  };

  const handleLoadMore = () => {
    //load more
  };

  return (
    <>
      <Breadcrumbs crumbs={path} />
      <PageTitle title="Tobacco" />
      <RowBetween sx={{ mb: 1 }}>
        <Sortbar />
        <SortFilter />
      </RowBetween>
      <Divider />
      <Row>
        <Sidebar goods={tobacco} />

        <ProductsList
          goods={tobacco}
          isLoading={isLoading}
          cart={cart}
          favorite={[]}
          pagination={2}
          page={page}
          onPage={handlePage}
          onLoadMore={handleLoadMore}
          skeleton={20}
          title="Large variety of tobacco for hookahs"
        />
      </Row>
    </>
  );
}
