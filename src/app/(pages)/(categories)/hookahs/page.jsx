'use client';
import { useState } from 'react';
import { useCart } from '@/app/hooks/useCart';
import { useGetGoodsQuery } from '@/app/redux/services/goods';
import { usePathname } from 'next/navigation';
import { Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import ProductsList from '@/app/components/products/productsList/productsList';
import Sortbar from '@/app/components/filters/sortbar/sortbar';
import { Row, RowBetween } from '@/app/lib/commonStyles';

export default function Hookahs() {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const { cart } = useCart();

  const { data = [], isLoading } = useGetGoodsQuery(limit);
  const hookahs = data.filter(n => n.categories === 'hookahs');

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
      <PageTitle title="Hookahs" />
      <RowBetween sx={{ mb: 1 }}>
        <Sortbar />
        <SortFilter />
      </RowBetween>

      <Divider />
      <Row>
        <Sidebar goods={hookahs} />
        <ProductsList
          goods={hookahs}
          isLoading={isLoading}
          cart={cart}
          favorite={[]}
          pagination={2}
          page={page}
          onPage={handlePage}
          onLoadMore={handleLoadMore}
          skeleton={20}
          title="Large variety of hookahs"
        />
      </Row>
    </>
  );
}
