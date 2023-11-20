'use client';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/products';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import ProductSwiper from './swiper/productSwiper';
import ProductContent from './content/productContent';
import RelatedProducts from '../relatedProducts/relatedProducts';
import { Container, BlockSwiper, BlockContent } from './productPage.styled';

export default function ProductPage() {
  const { slug } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(slug);

  return (
    <>
      {!isLoading && (
        <>
          <Breadcrumbs product={data} />
          <Container>
            <BlockSwiper component="section">
              <ProductSwiper product={data} />
            </BlockSwiper>
            <BlockContent component="section">
              <ProductContent product={data} />
            </BlockContent>
          </Container>
          <RelatedProducts id={slug} />
        </>
      )}
    </>
  );
}
