import { styled } from '@mui/material/styles';
import { IconButton as MuiIconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export const IconButton = styled(MuiIconButton)({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 2,
});

export const IconFavoriteBorder = styled(FavoriteBorderOutlinedIcon)(
  ({ theme }) => ({
    color: theme.palette.primary.accent,
    fontSize: '1.875rem',
  })
);

export const IconFavorite = styled(FavoriteOutlinedIcon)(({ theme }) => ({
  color: theme.palette.primary.accent,
  fontSize: '1.875rem',
}));
