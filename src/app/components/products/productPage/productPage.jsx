import { Box } from '@mui/material';
import ProductSwiper from './swiper/productSwiper';
import ProductContent from './content/productContent';
import RelatedProducts from '../relatedProducts/relatedProducts';

export default function ProductPage({
  product,
  relatedProducts,
  windowWidth,
  isLogin,
}) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mt: 4,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: '50%' },
            mr: { xs: 0, md: 2 },
            mb: { xs: 2, md: 0 },
          }}
        >
          <ProductSwiper product={product} windowWidth={windowWidth} />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        >
          <ProductContent product={product} isLogin={isLogin} />
        </Box>
      </Box>
      <RelatedProducts
        relatedProducts={relatedProducts}
        isLogin={isLogin}
        windowWidth={windowWidth}
      />
    </>
  );
}
