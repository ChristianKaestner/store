'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartReduceQuantity, cartRemove } from '../../redux/cart/slice';
import { cartIncreaseQuantity, cartSetQuantity } from '../../redux/cart/slice';
import { getCartProducts } from '../../redux/cart/operations';
import { useCart } from '../../hooks/useCart';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';
import { Container } from './shoppingCart.styled';
import OnError from '../Notifications/onError';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart, cartProducts } = useCart();

  useEffect(() => {
    if (!cart) return;
    dispatch(getCartProducts(cart));
  }, [cart]);

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
    const getQuantity = () => {
      const product = cartProducts.find(product => product.id === id);
      const available = product.available;
      const num = Number(value);
      if (!num) return 1;
      const rounded = Math.round(num);
      if (rounded > available) {
        return available;
      } else {
        return rounded;
      }
    };
    const quantity = getQuantity();
    dispatch(cartSetQuantity({ id, value: quantity }));
  };

  const shoppingTotal = () => {
    return cartProducts.reduce((sum, current) => {
      const quantity = current.quantity;
      if (isNaN(quantity) || quantity < 1 || quantity > current.available) {
        return sum + current.price;
      }
      return sum + current.price * quantity;
    }, 0);
  };

  return (
    <Container>
      {cartProducts.length ? (
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
            {cartProducts.map(product => {
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
                  {product.quantity > product.available && (
                    <OnError
                      text={`Unfortunately we only have ${product.available} items, if
                    you need more please contact us.`}
                    />
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
    </Container>
  );
}
