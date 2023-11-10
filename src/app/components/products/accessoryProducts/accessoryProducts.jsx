'use client';

import { useGetAccessoriesQuery } from '@/app/redux/services/products';
import CommonProducts from '../commonProducts/commonProducts';

export default function AccessoriesProducts() {
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
