'use client';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/products';
import ProductSwiper from './swiper/productSwiper';
import ProductContent from './content/productContent';
import RelatedProducts from '../relatedProducts/relatedProducts';
import { Container, BlockSwiper, BlockContent } from './productPage.styled';
import { tmpUser } from '@/app/lib/tmpData';

export default function ProductPage() {
  const { slug } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(slug);
  const { favorites } = tmpUser;

  return (
    <>
      {!isLoading && (
        <>
          <Container>
            <BlockSwiper component="section">
              <ProductSwiper product={data} />
            </BlockSwiper>
            <BlockContent component="section">
              <ProductContent product={data} favorites={favorites} />
            </BlockContent>
          </Container>
          <RelatedProducts />
        </>
      )}
    </>
  );
}
