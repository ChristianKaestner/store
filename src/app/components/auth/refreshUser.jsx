'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '@/app/redux/auth/operations';
import { getCart } from '@/app/redux/cart/operations';
import { useAuth } from '@/app/hooks/useAuth';

export default function RefreshUser() {
  const dispatch = useDispatch();
  const { isLogin } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLogin) {
      dispatch(getCart());
    }
  }, [isLogin]);

  return null;
}
