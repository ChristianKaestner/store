import { CardContent, Box, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductRating from '../rating/rating';
import Price from '../price/price';
import ProductTitle from '../productTitle/productTitle';
import SpeedDialCart from '../speedDialCart/speedDialCart';

export default function CardDescription({
  product,
  inCart,
  handleCart,
  openCart,
  path,
}) {
  const { brand, title, price, rating, reviews } = product;
  return (
    <CardContent>
      <Box>
        <Typography sx={{ fontSize: 14, textAlign: 'center', mb: 1 }}>
          {brand}
        </Typography>
        <ProductTitle path={path} title={title} />
      </Box>
      <ProductRating
        rating={rating}
        reviewUrl="/reviews"
        totalReviews={reviews.length}
        size="small"
      />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mt: 1,
        }}
      >
        <Price price={price} component="p" />

        {inCart ? (
          <Box>
            <SpeedDialCart handleCart={handleCart} openCart={openCart} />
          </Box>
        ) : (
          <IconButton onClick={handleCart}>
            <AddShoppingCartIcon
              sx={{ color: 'primary.accent', fontSize: 30 }}
            />
          </IconButton>
        )}
      </Box>
    </CardContent>
  );
}
