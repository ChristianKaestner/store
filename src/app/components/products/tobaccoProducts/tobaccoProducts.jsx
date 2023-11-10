'use client';

import { useGetTobaccoQuery } from '@/app/redux/services/products';
import { useFilters } from '@/app/hooks/useFilters';
import CommonProducts from '../commonProducts/commonProducts';

export default function TobaccoProducts() {
  const { brand, price, status, weight, flavor, page, limit } = useFilters();
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
  if (weight.length) {
    params.weight = weight.join(',');
  }
  if (flavor.length) {
    params.flavor = flavor.join(',');
  }
  (params.page = page), (params.limit = limit);

  const { data = [], isLoading } = useGetTobaccoQuery(params);

  return (
    <>
      {!isLoading && (
        <CommonProducts
          data={data}
          isLoading={isLoading}
          title="Large variety of tobacco"
        />
      )}
    </>
  );
}
