'use client';

import { useGetCoalsQuery } from '@/app/redux/services/products';
import CommonProducts from '../commonProducts/commonProducts';

export default function CoalProducts() {
  const { data = [], isLoading } = useGetCoalsQuery();

  return (
    <>
      {!isLoading && (
        <CommonProducts
          data={data}
          isLoading={isLoading}
          title="Large variety of hookah coals"
        />
      )}
    </>
  );
}
