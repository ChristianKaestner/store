import { Box } from '@mui/material';
import ProductSwiper from './swiper/productSwiper';

export default function ProductPage({ product, windowWidth }) {
  const { images, title } = product;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{ position: 'relative', width: { xs: '100%', md: '50%' }, mr: 2 }}
      >
        <ProductSwiper
          images={images}
          title={title}
          windowWidth={windowWidth}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '50%' },
          bgcolor: 'gainsboro',
        }}
      >
        <p>123</p>
      </Box>
    </Box>
  );
}
