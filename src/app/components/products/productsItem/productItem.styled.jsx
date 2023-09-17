import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard, {
  shouldForwardProp: prop => prop !== 'isover',
})(({ isover }) => ({
  filter: isover ? 'grayscale(1)' : 'none',
  transition: 'box-shadow 500ms ease-in-out',
  maxHeight: 420,
  width: '100%',
  '&:hover': {
    boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
    '& .scaleImage': {
      transform: 'scale(1.03)',
    },
  },
}));
