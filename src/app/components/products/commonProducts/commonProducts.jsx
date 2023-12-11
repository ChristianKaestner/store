import ProductsList from '../productsList/productsList';
import Sidebar from '@/app/components/sidebar/sidebar';
import SortFilter from '@/app/components/filters/sortfilter/sortfilter';
import LimitFilter from '@/app/components/filters/limitFilter/limitFilter';
import Sortbar from '../../filters/sortbar/sortbar';
import DrawerFilters from '../../filters/drawerFilters/drawerFilters';
import PaginationComponent from '../../pagination/pagination';
import { Row, RowBetween } from '@/app/lib/commonStyles';
import { useMediaQuery } from '@mui/material';

export default function CommonProducts({
  data,
  title,
  isLoading,
  page,
  limit,
  multiplier,
}) {
  const isDrawer = useMediaQuery('(max-width:1199px)');
  const isPaginated =
    data?.counts?.total > limit &&
    data?.products?.length !== data?.counts?.total;

  return (
    <>
      <RowBetween sx={{ mb: 1 }}>
        {isDrawer ? (
          <>
            <DrawerFilters filter={data.counts} />
            <Sortbar mobile={true} total={data?.counts?.total} />
          </>
        ) : (
          <Sortbar total={data?.counts?.total} data={data} />
        )}
        <Row sx={{ gap: 2 }}>
          <LimitFilter />
          <SortFilter />
        </Row>
      </RowBetween>
      <Row>
        <Sidebar filter={data.counts} />
        <ProductsList
          products={data.products}
          skeleton={12}
          component="h4"
          title={title}
          isLoading={isLoading}
        />
      </Row>
      {isPaginated && (
        <PaginationComponent
          page={page}
          limit={limit}
          length={data.products.length}
          total={data.counts.total}
          multiplier={multiplier}
        />
      )}
    </>
  );
}
