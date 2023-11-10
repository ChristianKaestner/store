'use client';

import { useGetTobaccoQuery } from '@/app/redux/services/products';
import CommonProducts from '../commonProducts/commonProducts';

export default function TobaccoProducts() {
  const { data = [], isLoading } = useGetTobaccoQuery();

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
