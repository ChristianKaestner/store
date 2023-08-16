'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';
import { items } from '@/app/utils/tmpData';
import { productsOperations } from '@/app/redux/products/operations';
import { useProducts } from '@/app/hooks/useProducts';

// const cartProducts = items.forEach(item => {item, item.quantity = 1})

export default function ShoppingCart({ cartQuantity }) {
  const [cart, setCart] = useState(items);
  const { products, isLoading, isError } = useProducts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  console.log(products);

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
