'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '@/app/hooks/useAuth';
import { toggleAccount } from '@/app/redux/modal/slice';
import { IconFavorite, IconFavoriteBorder } from './favoriteIcon.styled';
import { IconButton } from './favoriteIcon.styled';
import { tmpUser } from '@/app/utils/tmpData';

export default function FavoriteIcon({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites } = tmpUser;
  
  useEffect(() => {
    if (favorites === undefined) return;
    if (favorites.includes(id)) setIsFavorite(true);
  }, favorites);

  const { isLogin } = useAuth();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (!isLogin) {
      dispatch(toggleAccount(true));
      return;
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <IconButton onClick={handleFavorite} size="small">
      {isFavorite ? <IconFavorite /> : <IconFavoriteBorder />}
    </IconButton>
  );
}
