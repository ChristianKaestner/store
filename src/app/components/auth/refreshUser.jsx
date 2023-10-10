'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';

export default function RefreshUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return null;
}
