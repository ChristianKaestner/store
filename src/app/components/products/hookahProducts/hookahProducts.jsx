'use client';

import { useGetHookahsQuery } from '@/app/redux/services/products';
import { tmpUser } from '@/app/lib/tmpData';
import ProductsList from '../productsList/productsList';
import Sidebar from '@/app/components/sidebar/sidebar';
import { Row } from '@/app/lib/commonStyles';

export default function HookahProducts() {
  const { favorites } = tmpUser;
  const { data = [], isLoading } = useGetHookahsQuery();

  return (
    <>
      {!isLoading && (
        <Row>
          <Sidebar data={data} />
          <ProductsList
            products={data.products}
            favorites={favorites}
            skeleton={12}
            component="h4"
            title="Large variety of hookahs"
            isLoading={isLoading}
          />
        </Row>
      )}
    </>
  );
}
