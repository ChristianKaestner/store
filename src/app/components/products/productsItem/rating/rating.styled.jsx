import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  marginLeft: 8,
  '&:hover': {
    color: theme.palette.primary.accent,
    textDecoration: 'underline',
  },
}));
