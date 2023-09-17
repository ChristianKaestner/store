import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';

export const RateContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  listStyle: 'none',
});

export const RateIconBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.light,
  marginRight: 8,
  '&:hover': { color: theme.palette.primary.accent },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}));
