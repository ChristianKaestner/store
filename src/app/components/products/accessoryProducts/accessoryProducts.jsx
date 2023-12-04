'use client';

import { useGetAccessoriesQuery } from '@/app/redux/services/products';
import { useFilters } from '@/app/hooks/useFilters';
import CommonProducts from '../commonProducts/commonProducts';
import Loader from '@/app/components/loading/loaderBackdrop';

export default function AccessoriesProducts() {
  const {
    brand,
    price,
    status,
    type,
    bowl_type,
    page,
    limit,
    multiplier,
    sort,
  } = useFilters();

  const params = {};
  if (brand.length) {
    params.brand = brand.join(',');
  }
  if (price.length) {
    const [min, max] = price[0].split('-');
    params.min = min;
    params.max = max;
  }

  if (status.length) {
    params.status = status.join(',');
  }
  if (type.length) {
    params.type = type.join(',');
  }
  if (bowl_type.length) {
    params.bowl_type = bowl_type.join(',');
  }
  if (sort !== '') {
    params.sort = sort;
  }
  (params.page = page), (params.limit = limit * multiplier);

  const { data = [], isLoading } = useGetAccessoriesQuery(params);

  return (
    <>
      {!isLoading && (
        <CommonProducts
          data={data}
          isLoading={isLoading}
          title="Large variety of hookah accessories"
          page={page}
          limit={limit}
          multiplier={multiplier}
        />
      )}
       <Loader isLoading={isLoading} />
    </>
  );
}
