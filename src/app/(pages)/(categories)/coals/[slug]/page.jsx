'use client';

import { usePathname, useParams } from 'next/navigation';
import {
  useGetProductByIdQuery,
  useGetAllGoodsQuery,
} from '@/app/redux/services/goods';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import ProductPage from '@/app/components/products/productPage/productPage';

export default function Hookah() {
  const path = usePathname().split('/');
  path.splice(0, 1);

  const { slug } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(slug);
  const relatedProducts = useGetAllGoodsQuery();

  return (
    <>
      {!isLoading && (
        <>
          <Breadcrumbs crumbs={path} title={data?.title} />
          {data && (
            <ProductPage product={data} relatedProducts={relatedProducts} />
          )}
        </>
      )}
    </>
  );
}
