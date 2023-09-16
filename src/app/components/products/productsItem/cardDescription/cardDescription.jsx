import { CardContent, Box, IconButton } from '@mui/material';
import ProductRating from '../rating/rating';
import Price from '../price/price';
import ProductTitle from '../productTitle/productTitle';
import SpeedDialCart from '../speedDialCart/speedDialCart';
import { Text, Block, IconAddCart } from './cardDescription.styled';

export default function CardDescription({
  product,
  inCart,
  handleCart,
  openCart,
  path,
}) {
  const { brand, title, price, rating, reviews } = product;
  return (
    <CardContent sx={{ p: 1 }}>
      <Box>
        <Text>{brand}</Text>
        <ProductTitle path={path} title={title} />
      </Box>
      <ProductRating
        rating={rating}
        reviewUrl="/reviews"
        totalReviews={reviews.length}
        size="small"
      />
      <Block>
        <Price price={price} component="p" />

        {inCart ? (
          <Box>
            <SpeedDialCart handleCart={handleCart} openCart={openCart} />
          </Box>
        ) : (
          <IconButton onClick={handleCart}>
            <IconAddCart />
          </IconButton>
        )}
      </Block>
    </CardContent>
  );
}
