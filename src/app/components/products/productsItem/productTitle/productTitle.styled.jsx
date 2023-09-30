import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Text = styled(Typography)(({ theme }) => ({
  height: 40,
  maxHeight: 40,
  overflow: 'hidden',
  fontSize: '0.875rem',
  marginBottom: 8,
  color: '#fff',
  '&:hover': {
    color: theme.palette.primary.accent,
    textDecoration: 'underline',
  },
}));
