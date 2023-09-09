import { Box, Typography, Paper } from '@mui/material';
import ProductRating from '../../productsItem/rating/rating';
import FavoriteIcon from '../../productsItem/favoriteIcon/favoriteIcon';
import ColorPicker from '../colorPicker/colorPicker';
import BuyButton from '../../productsItem/buyButton/buyButton';
import Price from '../../productsItem/price/price';
import BalanceStatus from '../../productsItem/balanceStatus/balanceStatus';
import ProductCode from '../../productsItem/productCode/productCode';

export default function ProductContent({ product }) {
  const {
    brand,
    title,
    description,
    colors,
    price,
    status,
    id,
    rating,
    reviews,
  } = product;

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography component="h1" sx={{ fontWeight: 500, fontSize: 32 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 1,
          }}
        >
          <ProductRating
            rating={rating}
            reviewUrl="/reviews"
            totalReviews={reviews.length}
            size="medium"
          />
          <ProductCode id={id} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography component="h2" sx={{ fontWeight: 400 }}>
            <Box component="span" sx={{ fontWeight: 500 }}>
              Brand:
            </Box>{' '}
            {brand}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 2,
            alignItems: 'center',
          }}
        >
          {colors && <ColorPicker colors={colors} />}
        </Box>
        <Box>
          <Typography component="h3" sx={{ fontWeight: 400 }}>
            <Box
              component="span"
              sx={{ fontWeight: 500, color: 'primary.text' }}
            >
              Description:
            </Box>{' '}
            {description}
          </Typography>
        </Box>
      </Paper>

      <Paper
        elevation={2}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          mt: 4,
          p: 2,
          alignItems: 'center',
        }}
      >
        <Box>
          <Price price={price} component="h4" />
          <BalanceStatus status={status} />
        </Box>
        <Box sx={{ position: 'relative', width: 240, ml: 2 }}>
          <BuyButton id={id} width={160} />
          <FavoriteIcon />
        </Box>
      </Paper>
    </Box>
  );
}
