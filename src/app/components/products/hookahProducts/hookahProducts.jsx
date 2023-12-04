'use client';

import { useGetHookahsQuery } from '@/app/redux/services/products';
import { useFilters } from '@/app/hooks/useFilters';
import CommonProducts from '../commonProducts/commonProducts';
import Loader from '@/app/components/loading/loaderBackdrop';

export default function HookahProducts() {
  const {
    brand,
    price,
    status,
    color,
    hookah_size,
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
  if (color.length) {
    params.color = color.join(',');
  }
  if (hookah_size.length) {
    params.hookah_size = hookah_size.join(',');
  }
  if (sort !== '') {
    params.sort = sort;
  }
  (params.page = page), (params.limit = limit * multiplier);

  const { data = [], isLoading } = useGetHookahsQuery(params);

  return (
    <>
      {!isLoading && (
        <CommonProducts
          data={data}
          isLoading={isLoading}
          title="Large variety of hookahs"
          page={page}
          limit={limit}
          multiplier={multiplier}
        />
      )}
      <Loader isLoading={isLoading} />
    </>
  );
}
