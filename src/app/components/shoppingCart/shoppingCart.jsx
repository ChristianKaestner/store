'use client';

import { useDispatch } from 'react-redux';
import {
  cartReduceQuantity,
  cartIncreaseQuantity,
  cartRemove,
  cartSetQuantity,
} from '@/app/redux/products/slice';
import { useProducts } from '@/app/hooks/useProducts';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';

export default function ShoppingCart() {
  const { cart, isLoading } = useProducts();
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(cartRemove(id));
  };

  const handleIncreaseQuantity = id => {
    dispatch(cartIncreaseQuantity(id));
  };

  const handleReduceQuantity = id => {
    dispatch(cartReduceQuantity(id));
  };

  const handleSetQuantity = (id, num) => {
    dispatch(cartSetQuantity({ id, num }));
  };

  const shoppingTotal = () => {
    return cart.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '485px',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {cart.length > 0 ? (
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
            {cart.map(product => {
              return (
                <Grid
                  key={product.id}
                  component="li"
                  sx={{ width: '100%', height: 'auto', mt: 1 }}
                >
                  <CartItem
                    product={product}
                    increase={handleIncreaseQuantity}
                    reduce={handleReduceQuantity}
                    change={handleSetQuantity}
                    del={handleDelete}
                  />
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
