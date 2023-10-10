'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '@/app/redux/auth/operations';

export default function RefreshUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('refresh user');
    dispatch(refreshUser());
  }, []);

  return null;
}
