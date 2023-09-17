import { styled } from '@mui/material/styles';
import { SpeedDial as MuiSpeedDial } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const SpeedDial = styled(MuiSpeedDial)({
  position: 'absolute',
  bottom: 0,
  right: -5,
  zIndex: 1,
});

export const IconCart = styled(ShoppingCartCheckoutIcon)(({ theme }) => ({
  fontSize: '1.875rem',
  color: theme.palette.primary.accent,
}));

export const IconCartRemove = styled(RemoveShoppingCartIcon)(({ theme }) => ({
  fontSize: '1.875rem',
  color: theme.palette.primary.accent,
}));

export const IconCartOpen = styled(ShoppingCartIcon)(({ theme }) => ({
  fontSize: '1.875rem',
  color: theme.palette.primary.accent,
}));
