import { CardContent, Box, Typography, IconButton } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ProductRating from '../rating/rating';
import Price from '../price/price';
import ProductTitle from '../productTitle/productTitle';

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
            <SpeedDial
              ariaLabel="SpeedDial cart"
              sx={{ position: 'absolute', bottom: 0, right: -5, zIndex: 1 }}
              icon={
                <ShoppingCartCheckoutIcon
                  sx={{ color: 'primary.accent', fontSize: 30 }}
                />
              }
            >
              <SpeedDialAction
                icon={
                  <RemoveShoppingCartIcon
                    sx={{ color: 'primary.accent', fontSize: 30 }}
                  />
                }
                tooltipTitle="delete"
                onClick={handleCart}
              />
              <SpeedDialAction
                icon={
                  <ShoppingCartIcon
                    sx={{ color: 'primary.accent', fontSize: 30 }}
                  />
                }
                tooltipTitle="cart"
                onClick={openCart}
              />
            </SpeedDial>
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
