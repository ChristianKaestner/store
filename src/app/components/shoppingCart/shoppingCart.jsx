'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import CartItem from './cartItem/cartItem';
import { items } from '@/app/utils/tmpData';

export default function ShoppingCart() {
  const [cart, setCart] = useState(items);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',

          flexDirection: 'column',
          // justifyContent: 'center',
          // textAlign: 'center',
          // alignItems: 'center',
        }}
      >
        {cart ? (
          <Box component="ul">
            {cart.map(product => {
              return <CartItem product={product} key={product.id} />;
            })}
          </Box>
        ) : (
          <>
            <Image
              src="/cart.png"
              alt="image"
              width={400}
              height={300}
              priority="false"
            />
            <Typography>Your shopping cart is empty</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
