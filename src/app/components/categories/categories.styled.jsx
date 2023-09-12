import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 200,
  textAlign: 'center',
  bgcolor: theme.palette.primary.main,
  '&:hover': {
    boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
    '& .scaleImage': {
      transform: 'scale(1.1)',
    },
  },
}));
