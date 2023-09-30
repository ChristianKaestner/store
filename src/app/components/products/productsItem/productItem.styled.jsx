import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard, {
  shouldForwardProp: prop => prop !== 'isover',
})(({ isover, theme }) => ({
  filter: isover ? 'grayscale(1)' : 'none',
  transition: 'box-shadow 500ms ease-in-out',
  backgroundColor: theme.palette.primary.main,
  width: 'calc(100% / 2 - 16px)',
  height: 300,
  marginBottom: 16,
  zIndex: 1,
  opacity: 0.9,
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% / 3 - 16px)',
    height: 310,
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 4 - 16px)',
    height: 360,
  },
  [theme.breakpoints.up('lg')]: {
    width: 'calc(100% / 5 - 16px)',
  },
  [theme.breakpoints.up('xl')]: {
    width: 'calc(100% / 6 - 16px)',
  },
  '&:hover': {
    boxShadow: '0px 4px 12px 1px rgba(255, 255, 255, 0.5)',
    '& .scaleImage': {
      transform: 'scale(1.03)',
    },
  },
}));
