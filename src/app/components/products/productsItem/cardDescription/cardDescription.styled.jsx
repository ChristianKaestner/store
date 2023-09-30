import { Box, Typography, CardContent } from '@mui/material';
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
  alignItems: 'center',
  height: 46,
  marginTop: 8,
});

export const IconAddCart = styled(AddShoppingCartIcon)(({ theme }) => ({
  fontSize: '1.875rem',
  color: theme.palette.primary.accent,
}));

export const Description = styled(CardContent)({
  padding: '0px 8px 8px 8px !important',
});
