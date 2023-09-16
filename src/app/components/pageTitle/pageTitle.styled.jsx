import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Text = styled(Typography)(({ theme }) => ({
  margin: '16px 0',
  fontWeight: 500,
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
}));
