'use client';

import { useDispatch } from 'react-redux';
import { useAuth } from '@/app/hooks/useAuth';
import { toggleAccount } from '@/app/redux/modal/slice';
import { addFavorite, deleteFavorite } from '@/app/redux/favorite/operations';
import { IconFavorite, IconFavoriteBorder } from './favoriteIcon.styled';
import { IconButton } from './favoriteIcon.styled';

export default function FavoriteIcon({ id, isFavorite }) {
  const { isLogin } = useAuth();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (!isLogin) {
      dispatch(toggleAccount(true));
      return;
    }
    isFavorite ? dispatch(deleteFavorite(id)) : dispatch(addFavorite(id));
  };
  return (
    <IconButton onClick={handleFavorite} size="small">
      {isFavorite ? <IconFavorite /> : <IconFavoriteBorder />}
    </IconButton>
  );
}
