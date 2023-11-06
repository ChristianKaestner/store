'use client';

import { useGetPromotedQuery } from '@/app/redux/services/products';
import { tmpUser } from '@/app/lib/tmpData';
import ProductsList from '../productsList/productsList';

export default function PromotedProducts() {
  const { favorites } = tmpUser;
  const { data = [], isLoading, error } = useGetPromotedQuery();

  return (
    <>
      <ProductsList
        products={data}
        favorites={favorites}
        skeleton={12}
        component="h4"
        title="Hot deals on hookahs, tobacco, coal and accessories "
        isLoading={isLoading}
      />
    </>
  );
}
