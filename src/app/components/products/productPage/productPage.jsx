'use client';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/products';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import ProductSwiper from './swiper/productSwiper';
import ProductContent from './content/productContent';
import RelatedProducts from '../relatedProducts/relatedProducts';
import { Container, BlockSwiper, BlockContent } from './productPage.styled';
import Loader from '@/app/components/loading/loaderBackdrop';
import { defineCategory } from '@/app/lib/functions';

export default function ProductPage() {
  const { slug } = useParams();
  const { data = {}, isLoading } = useGetProductByIdQuery(slug);
  const category = defineCategory(data);
  const product = { ...data, category };

  return (
    <>
      {!isLoading && (
        <>
          <Breadcrumbs product={product} />
          <Container>
            <BlockSwiper component="section">
              <ProductSwiper product={product} />
            </BlockSwiper>
            <BlockContent component="section">
              <ProductContent product={product} />
            </BlockContent>
          </Container>
          <RelatedProducts id={slug} />
        </>
      )}
      <Loader isLoading={isLoading} />
    </>
  );
}
