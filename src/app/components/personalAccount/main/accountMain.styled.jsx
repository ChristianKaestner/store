import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));
