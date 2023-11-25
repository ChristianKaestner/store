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
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('s')]: {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

export const RatingStyled = styled(Rating, {
  shouldForwardProp: prop => prop !== 'isCard',
})(({ isCard, theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: isCard ? '0.7rem' : '1.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: isCard ? '0.9rem' : '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: isCard ? '1rem' : '1.5rem',
  },
}));
