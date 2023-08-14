'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import { items } from '@/app/utils/tmpData';

export default function ShoppingCart() {
  const [cart, setCart] = useState([items[0]]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid
        component="ul"
        container
        columnSpacing={1}
        sx={{ listStyle: 'none' }}
      >
        {cart.map(item => {
          return (
            <Grid
              key={item.id}
              component="li"
              sx={{ width: '100%', height: 'auto', mt: 1 }}
            >
              <CartItem product={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

{
  /* <>
  <Image
    src="/cart.png"
    alt="image"
    width={400}
    height={300}
    priority="false"
  />
  <Typography>Your shopping cart is empty</Typography>
</>; */
}
