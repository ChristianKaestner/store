import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
