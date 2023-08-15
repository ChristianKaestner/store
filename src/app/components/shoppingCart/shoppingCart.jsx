'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import { items } from '@/app/utils/tmpData';

export default function ShoppingCart() {
  const [cart, setCart] = useState(items);

  const handleDelete = productId => {
    const updatedCart = cart.filter(item => item.id !== Number(productId));
    setCart(updatedCart);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 64px)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {cart.length > 0 ? (
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
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '64px auto 0',
          }}
        >
          <Image
            src="/cart.png"
            alt="image"
            width={400}
            height={300}
            priority="false"
          />
          <Typography>Your shopping cart is empty</Typography>
        </Box>
      )}
      <TotalPrice total="15 000" />
    </Box>
  );
}

{
  /* */
}
