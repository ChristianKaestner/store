import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '1rem',
  color: theme.palette.primary.light,
}));
