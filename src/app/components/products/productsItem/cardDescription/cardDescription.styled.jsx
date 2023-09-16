import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Text = styled(Typography)({
  fontSize: '0.875rem',
  textAlign: 'center',
  marginBottom: 8,
});

export const Block = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
});

export const IconAddCart = styled(AddShoppingCartIcon)(({ theme }) => ({
  color: theme.palette.primary.accent,
  fontSize: '1.875rem',
}));
