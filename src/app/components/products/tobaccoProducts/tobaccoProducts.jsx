'use client';

import { useGetTobaccoQuery } from '@/app/redux/services/products';
import { tmpUser } from '@/app/lib/tmpData';
import ProductsList from '../productsList/productsList';
import Sidebar from '@/app/components/sidebar/sidebar';
import { Row } from '@/app/lib/commonStyles';

export default function TobaccoProducts() {
  const { favorites } = tmpUser;
  const { data = [], isLoading } = useGetTobaccoQuery();

  return (
    <>
      {!isLoading && (
        <Row>
          <Sidebar filter={data.counts} />
          <ProductsList
            products={data.products}
            favorites={favorites}
            skeleton={12}
            component="h4"
            title="Large variety of tobacco"
            isLoading={isLoading}
          />
        </Row>
      )}
    </>
  );
}
