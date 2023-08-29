'use client';

import { useDispatch } from 'react-redux';
import { cartReduceQuantity, cartRemove } from '@/app/redux/cart/slice';
import { cartIncreaseQuantity, cartSetQuantity } from '@/app/redux/cart/slice';
import { useGetProductsByIdsQuery } from '@/app/redux/services/goods';
import { useCart } from '@/app/hooks/useCart';
import { Box, Alert } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useCart();

  const searchingParams = cart.map(item => `id=${item.id}&`);
  const { data = [] } = useGetProductsByIdsQuery(searchingParams.join(''));

  const getQuantity = (cart, id) => {
    if (!cart.length) return;
    const product = cart.find(item => item.id === id);
    return product?.quantity || 1;
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

  const handleSetQuantity = (id, value) => {
    dispatch(cartSetQuantity({ id, value }));
  };

  const shoppingTotal = () => {
    return data.reduce((sum, current) => {
      const quantity = getQuantity(cart, current.id);
      if (isNaN(quantity) || quantity < 1 || quantity > current.available) {
        return sum + current.price;
      }
      return sum + current.price * quantity;
    }, 0);
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
      {data.length && cart.length ? (
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
              const quantity = getQuantity(cart, product.id);
              return (
                <Grid
                  key={product.id}
                  component="li"
                  sx={{ width: '100%', height: 'auto', mt: 1 }}
                >
                  <CartItem
                    product={product}
                    quantity={quantity}
                    increase={handleIncreaseQuantity}
                    reduce={handleReduceQuantity}
                    change={handleSetQuantity}
                    del={handleDelete}
                  />
                  {quantity > product.available && (
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
