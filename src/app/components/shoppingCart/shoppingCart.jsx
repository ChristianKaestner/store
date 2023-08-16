'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';
import { items } from '@/app/utils/tmpData';

export default function ShoppingCart({ cartQuantity }) {
  const [cart, setCart] = useState(items);

  const handleDelete = productId => {
    const updatedCart = cart.filter(item => item.id !== Number(productId));
    setCart(updatedCart);
  };

  const shoppingTotal = () => {
    return cart.reduce((sum, current) => sum + current.price, 0);
  };

  cartQuantity(cart.length);

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
                  <CartItem product={product} handleDelete={handleDelete} />
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
