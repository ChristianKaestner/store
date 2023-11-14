import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Text = styled(Typography)(({ theme }) => ({
  height: 40,
  maxHeight: 40,
  overflow: 'hidden',
  marginBottom: 8,
  color: '#fff',
  '&:hover': {
    color: theme.palette.primary.accent,
    textDecoration: 'underline',
  },
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.875rem',
  },
}));
