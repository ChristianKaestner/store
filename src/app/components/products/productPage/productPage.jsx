import ProductSwiper from './swiper/productSwiper';
import ProductContent from './content/productContent';
import RelatedProducts from '../relatedProducts/relatedProducts';
import { Container, BlockSwiper, BlockContent } from './productPage.styled';
import { tmpUser } from '@/app/lib/tmpData';

export default function ProductPage({ product, relatedProducts }) {
  const { favorites } = tmpUser;
  return (
    <>
      <Container>
        <BlockSwiper component="section">
          <ProductSwiper product={product} />
        </BlockSwiper>
        <BlockContent component="section">
          <ProductContent product={product} favorites={favorites} />
        </BlockContent>
      </Container>
      <RelatedProducts relatedProducts={relatedProducts} />
    </>
  );
}
