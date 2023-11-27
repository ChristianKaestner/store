'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '@/app/redux/auth/operations';
import { getCart, addCart } from '@/app/redux/cart/operations';
import { getFavorite } from '@/app/redux/favorite/operations';
import { useAuth } from '@/app/hooks/useAuth';
import { useCart } from '@/app/hooks/useCart';
import { clearCart } from '@/app/redux/cart/slice';

export default function RefreshUser() {
  const dispatch = useDispatch();
  const { isLogin } = useAuth();
  const { cart } = useCart();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const syncCart = async () => {
    const response = await dispatch(getCart());
    if (response.meta.requestStatus === 'fulfilled') {
      if (!cart.length) return;
      const profileCartProducts = response.payload;
      const notInProfileCart = cart.filter(cartLocal => {
        return !profileCartProducts.some(
          cartProfile => cartProfile.id === cartLocal.productId
        );
      });
      if (notInProfileCart.length) {
        const payload = { items: notInProfileCart };
        const response = await dispatch(addCart(payload));
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(clearCart());
        }
      }
    }
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(getFavorite());
      syncCart();
    }
  }, [isLogin, dispatch]);

  return null;
}
