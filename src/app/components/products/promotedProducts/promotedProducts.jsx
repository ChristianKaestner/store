'use client';

import { useGetPromotedQuery } from '@/app/redux/services/products';
import ProductsList from '../productsList/productsList';

export default function PromotedProducts() {
  const { data = [], isLoading } = useGetPromotedQuery();

  return (
    <>
      <ProductsList
        products={data}
        skeleton={12}
        component="h4"
        title="Hot deals on hookahs, tobacco, coal and accessories "
        isLoading={isLoading}
      />
    </>
  );
}
