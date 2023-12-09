'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { refreshUser, verifyCode } from '@/app/redux/auth/operations';
import { getCart, addCart } from '@/app/redux/cart/operations';
import { getFavorite } from '@/app/redux/favorite/operations';
import { useAuth } from '@/app/hooks/useAuth';
import { useCart } from '@/app/hooks/useCart';
import { clearCart } from '@/app/redux/cart/slice';
import { setToken } from '@/app/redux/auth/slice';
import Cookies from 'js-cookie';

export default function RefreshUser() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const dispatch = useDispatch();
  const { isLogin } = useAuth();
  const { cart } = useCart();

  const verify = () => {
    dispatch(verifyCode({ code }));
    router.push(pathname, { scroll: false });
  };

  if (code) {
    verify();
  }

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      dispatch(setToken(token));
      Cookies.remove('token');
      dispatch(refreshUser());
    } else {
      dispatch(refreshUser());
    }
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
    // eslint-disable-next-line
  }, [isLogin, dispatch]);

  return null;
}
