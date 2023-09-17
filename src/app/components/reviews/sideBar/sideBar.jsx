import Image from 'next/image';
import { Box, Paper } from '@mui/material';
import BuyButton from '@/app/components/products/productsItem/buyButton/buyButton';
import Price from '@/app/components/products/productsItem/price/price';
import ProductTitle from '../../products/productsItem/productTitle/productTitle';

export default function SideBar({ image, title, price, id }) {
  return (
    <Paper
      elevation={3}
      component="aside"
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'row',
        flexGrow: 1,
        width: 'auto',
        height: 160,
        MaxWidth: '30%',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Box sx={{ position: 'relative', mr: 2 }}>
        <Image
          src={image}
          width={80}
          height={80}
          alt={title + ' image'}
          priority="false"
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <ProductTitle path="/" title={title} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Price price={price} component="p" />
          <BuyButton id={id} width={120} />
        </Box>
      </Box>
    </Paper>
  );
}
