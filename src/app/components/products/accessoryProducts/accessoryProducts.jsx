'use client';

import { useGetAccessoriesQuery } from '@/app/redux/services/products';
import { tmpUser } from '@/app/lib/tmpData';
import ProductsList from '../productsList/productsList';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import Sortbar from '../../filters/sortbar/sortbar';
import DrawerFilters from '../../filters/drawerFilters/drawerFilters';
import { Row, RowBetween } from '@/app/lib/commonStyles';
import { useMediaQuery } from '@mui/material';

export default function AccessoriesProducts() {
  const { favorites } = tmpUser;
  const { data = [], isLoading } = useGetAccessoriesQuery();
  const isDrawer = useMediaQuery('(max-width:1199px)');

  return (
    <>
      {!isLoading && (
        <>
          <RowBetween sx={{ mb: 1 }}>
            {isDrawer ? (
              <>
                <DrawerFilters filter={data.counts} />
                <Sortbar mobile={true} total={data?.counts?.total} />
              </>
            ) : (
              <Sortbar total={data?.counts?.total} />
            )}
            <SortFilter />
          </RowBetween>
          <Row>
            {!isDrawer && <Sidebar filter={data.counts} />}
            <ProductsList
              products={data.products}
              favorites={favorites}
              skeleton={12}
              component="h4"
              title="Large variety of hookah accessories"
              isLoading={isLoading}
            />
          </Row>
        </>
      )}
    </>
  );
}
