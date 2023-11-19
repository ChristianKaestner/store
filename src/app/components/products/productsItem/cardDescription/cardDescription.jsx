import { Box, IconButton } from '@mui/material';
import ProductRating from '../rating/rating';
import Price from '../price/price';
import ProductTitle from '../productTitle/productTitle';
import SpeedDialCart from '../speedDialCart/speedDialCart';
import { Block, IconAddCart, Description } from './cardDescription.styled';

export default function CardDescription({
  product,
  inCart,
  handleAddCart,
  handleDeleteCart,
  openCart,
  path,
}) {
  const { title, price } = product;

  return (
    <Description>
      <Box>
        <ProductTitle path={path} title={title} />
      </Box>
      <ProductRating product={product} size="small" />
      <Block>
        <Price component="p" price={price} />

        {inCart ? (
          <SpeedDialCart
            handleDeleteCart={handleDeleteCart}
            openCart={openCart}
          />
        ) : (
          <IconButton onClick={handleAddCart}>
            <IconAddCart />
          </IconButton>
        )}
      </Block>
    </Description>
  );
}
