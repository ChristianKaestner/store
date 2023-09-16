import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.875rem',
  color: theme.palette.primary.hot,
}));
