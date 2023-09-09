'use client';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAuth } from '@/app/hooks/useAuth';
import { toggleAccount } from '@/app/redux/modal/slice';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export default function FavoriteIcon() {
  const [isFavorite, setIsFavorite] = useState(false);

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
    <IconButton
      sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
      onClick={handleFavorite}
      size="small"
    >
      {isFavorite ? (
        <FavoriteOutlinedIcon sx={{ color: 'primary.accent', fontSize: 30 }} />
      ) : (
        <FavoriteBorderOutlinedIcon
          sx={{ fontSize: 30, color: 'primary.accent' }}
        />
      )}
    </IconButton>
  );
}
