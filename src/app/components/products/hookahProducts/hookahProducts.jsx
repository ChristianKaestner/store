'use client';

import { useGetHookahsQuery } from '@/app/redux/services/products';
import CommonProducts from '../commonProducts/commonProducts';

export default function HookahProducts() {
  const { data = [], isLoading } = useGetHookahsQuery();

  return (
    <>
      {!isLoading && (
        <CommonProducts
          data={data}
          isLoading={isLoading}
          title="Large variety of hookahs"
        />
      )}
    </>
  );
}
