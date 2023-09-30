import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard, {
  shouldForwardProp: prop => prop !== 'isover',
})(({ isover, theme }) => ({
  filter: isover ? 'grayscale(1)' : 'none',
  transition: 'box-shadow 500ms ease-in-out',

  width: '100%',
  zIndex: 1,
  [theme.breakpoints.up('xs')]: {
    height: 300,
  },
  [theme.breakpoints.up('md')]: {
    height: 360,
  },
  '&:hover': {
    boxShadow: '0px 4px 12px 1px rgba(255, 255, 255, 0.5)',
    '& .scaleImage': {
      transform: 'scale(1.03)',
    },
  },
}));
