'use client';

import { useDispatch } from 'react-redux';
import {
  cartReduceQuantity,
  cartIncreaseQuantity,
  cartRemove,
  cartSetQuantity,
} from '@/app/redux/cart/slice';
import { useCart } from '@/app/hooks/useCart';
import { useGetProductsByIdsQuery } from '@/app/redux/services/goods';
import { Box, Alert } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useCart();
  const searchingParams = cart.map(item => `id=${item.id}&`);

  const {
    data = [],
    isLoading,
    error,
  } = useGetProductsByIdsQuery(searchingParams.join(''));

  const quantity = (cart, id) => {
    const product = cart.find(item => item.id === id);
    return product.quantity;
  };

  const handleDelete = id => {
    dispatch(cartRemove(id));
  };

  const handleIncreaseQuantity = id => {
    dispatch(cartIncreaseQuantity(id));
  };

  const handleReduceQuantity = id => {
    dispatch(cartReduceQuantity(id));
  };

  const handleSetQuantity = (id, num, available) => {
    dispatch(cartSetQuantity({ id, num, available }));
  };

  const shoppingTotal = () => {
    return data.reduce(
      (sum, current) => sum + current.price * quantity(cart, current.id),
      0
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {data.length > 0 ? (
        <>
          <Grid
            component="ul"
            container
            columnSpacing={1}
            sx={{
              listStyle: 'none',
              mx: 0.1,
            }}
          >
            {data.map(product => {
              return (
                <Grid
                  key={product.id}
                  component="li"
                  sx={{ width: '100%', height: 'auto', mt: 1 }}
                >
                  <CartItem
                    product={product}
                    quantity={quantity(cart, product.id)}
                    increase={handleIncreaseQuantity}
                    reduce={handleReduceQuantity}
                    change={handleSetQuantity}
                    del={handleDelete}
                  />
                  {quantity(cart, product.id) >= product.available && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                      Unfortunately we only have {product.available} items, if
                      you need more please contact us.
                    </Alert>
                  )}
                </Grid>
              );
            })}
          </Grid>
          <TotalPrice total={shoppingTotal()} />
        </>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
}
