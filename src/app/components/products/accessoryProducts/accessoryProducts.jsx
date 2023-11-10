'use client';

import { useGetAccessoriesQuery } from '@/app/redux/services/products';
import { useFilters } from '@/app/hooks/useFilters';
import CommonProducts from '../commonProducts/commonProducts';

export default function AccessoriesProducts() {
  const filters = useFilters();
  // console.log(filters);
  // const filtersToQuery = filters => {};
  const { data = [], isLoading } = useGetAccessoriesQuery();

  return (
    <>
      {!isLoading && (
        <CommonProducts
          data={data}
          isLoading={isLoading}
          title="Large variety of hookah accessories"
        />
      )}
    </>
  );
}
