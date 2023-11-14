import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard, {
  shouldForwardProp: prop => prop !== 'isover' && prop !== 'mb',
})(({ isover, mb, theme }) => ({
  filter: isover ? 'grayscale(1)' : 'none',
  transition: 'box-shadow 500ms ease-in-out',
  backgroundColor: theme.palette.primary.main,
  height: 286,
  marginBottom: mb,
  zIndex: 1,
  opacity: 0.9,
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    height: 350,
  },

  '&:hover': {
    boxShadow: '0px 4px 12px 1px rgba(255, 255, 255, 0.5)',
    '& .scaleImage': {
      transform: 'scale(1.03)',
    },
  },
}));
