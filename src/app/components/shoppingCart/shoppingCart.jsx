'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartReduceQuantity, cartRemove } from '../../redux/cart/slice';
import { cartIncreaseQuantity, cartSetQuantity } from '../../redux/cart/slice';
import { getCart, getCartProducts } from '../../redux/cart/operations';
import { editCart, deleteCart } from '../../redux/cart/operations';
import { deleteAllCart } from '../../redux/cart/operations';
import { toggleCart, toggleOrder } from '../../redux/modal/slice';
import { toggleAccount } from '../../redux/modal/slice';
import { addOrder } from '../../redux/order/operations';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import Grid from '@mui/material/Unstable_Grid2';
import CartItem from './cartItem/cartItem';
import TotalPrice from './totalPrice/totatlPrice';
import EmptyCart from './emptyCart/emptyCart';
import { Container } from './shoppingCart.styled';
import OnError from '../Notifications/onError';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart, cartProducts } = useCart();
  const { isLogin } = useAuth();

  useEffect(() => {
    if (isLogin) {
      dispatch(getCart());
    } else {
      if (!cart) return;
      dispatch(getCartProducts(cart));
    }
  }, [cart, isLogin, dispatch]);

  const handleDelete = id => {
    if (isLogin) {
      dispatch(deleteCart(id));
    } else {
      dispatch(cartRemove(id));
    }
  };

  const handleIncreaseQuantity = ({ id, available }) => {
    if (isLogin) {
      const product = cartProducts.find(product => product.id === id);
      const quantity = product.quantity + 1;
      const payload = { items: [{ productId: id, quantity }] };
      dispatch(editCart(payload));
    } else {
      dispatch(cartIncreaseQuantity({ id, available }));
    }
  };

  const handleReduceQuantity = id => {
    if (isLogin) {
      const product = cartProducts.find(product => product.id === id);
      const quantity = product.quantity - 1;
      const payload = { items: [{ productId: id, quantity }] };
      dispatch(editCart(payload));
    } else {
      dispatch(cartReduceQuantity(id));
    }
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
    if (isLogin) {
      const payload = { items: [{ productId: id, quantity }] };
      dispatch(editCart(payload));
    } else {
      dispatch(cartSetQuantity({ id, value: quantity }));
    }
  };

  const shoppingTotal = () => {
    return parseFloat(
      cartProducts
        .reduce((sum, current) => {
          const quantity = current.quantity;
          if (isNaN(quantity) || quantity < 1 || quantity > current.available) {
            return sum + current.price;
          }
          return sum + current.price * quantity;
        }, 0)
        .toFixed(2)
    );
  };

  const handleProceed = async () => {
    if (isLogin && cartProducts.length) {
      const payload = cartProducts.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      }));
      const response = await dispatch(addOrder({ items: payload }));

      if (response.meta.requestStatus === 'fulfilled') {
        const delRes = await dispatch(deleteAllCart());
        if (delRes.meta.requestStatus === 'fulfilled') {
          dispatch(toggleCart(false));
          dispatch(toggleOrder(true));
        }
      }
    } else {
      dispatch(toggleCart(false));
      dispatch(toggleAccount(true));
    }
  };

  return (
    <>
      <Container>
        {cartProducts?.length ? (
          <>
            <Grid
              component="ul"
              container
              columnSpacing={1}
              sx={{ listStyle: 'none' }}
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
            <TotalPrice total={shoppingTotal()} handleProceed={handleProceed} />
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </>
  );
}
