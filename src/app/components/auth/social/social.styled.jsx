import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  marginTop: 16,
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dim,
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '100%',
  height: 48,
  marginTop: 16,
  color: theme.palette.primary.dim,
  borderColor: theme.palette.primary.dim,
  '&:hover': { borderColor: theme.palette.primary.light },
}));
