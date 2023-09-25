import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  width: '100%',
  textAlign: 'center',
  bgcolor: theme.palette.primary.main,
  [theme.breakpoints.up('xs')]: {
    height: 160,
  },
  [theme.breakpoints.up('sm')]: {
    height: 200,
  },
  '&:hover': {
    boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
    '& .scaleImage': {
      transform: 'scale(1.1)',
    },
  },
}));
