import { Box } from '@mui/material';
import ProductSwiper from './swiper/productSwiper';
import ProductContent from './content/productContent';

export default function ProductPage({ product, windowWidth }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mt: 4,
      }}
    >
      <Box
        sx={{ position: 'relative', width: { xs: '100%', md: '50%' }, mr: 2 }}
      >
        <ProductSwiper product={product} windowWidth={windowWidth} />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
        }}
      >
        <ProductContent product={product} />
      </Box>
    </Box>
  );
}
