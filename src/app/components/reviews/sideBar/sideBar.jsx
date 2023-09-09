import Image from 'next/image';
import { Typography, Box, Paper } from '@mui/material';
import FavoriteIcon from '@/app/components/products/productsItem/favoriteIcon/favoriteIcon';
import BuyButton from '@/app/components/products/productsItem/buyButton/buyButton';
import Price from '@/app/components/products/productsItem/price/price';

export default function SideBar({ image, title, price, id }) {
  return (
    <Paper
      elevation={3}
      component="aside"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '30%',
        p: 2,
      }}
    >
      <Box sx={{ mr: 2 }}>
        <Image
          src={image}
          width={80}
          height={80}
          alt={title + ' image'}
          priority="false"
        />
      </Box>
      <Box>
        <Typography>{title}</Typography>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            mt: 2,
            alignItems: 'center',
          }}
        >
          <Price price={price} component="p" />
          <BuyButton id={id} width={100} />
          <FavoriteIcon />
        </Box>
      </Box>
    </Paper>
  );
}
