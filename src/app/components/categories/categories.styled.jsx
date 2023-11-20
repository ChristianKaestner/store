import { Card as MuiCard, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({ width: '100%', margin: '32px 0' });

export const CatsBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyle: 'none',
});

export const CatsItem = styled(Box)({
  width: 'calc(100% / 2 - 16px)',
  marginBottom: 16,
  opacity: 0.9,
});

export const CatsText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.primary.dim,

  [theme.breakpoints.up('xs')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('s')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
  },
}));

export const Card = styled(MuiCard)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  width: '100%',
  textAlign: 'center',
  borderRadius: 4,

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
