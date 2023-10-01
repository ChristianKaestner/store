import { Box, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.subsidiary,
  marginLeft: 8,
  '&:hover': {
    color: theme.palette.primary.accent,
    textDecoration: 'underline',
  },
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
}));

export const RatingStyled = styled(Rating)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
}));
