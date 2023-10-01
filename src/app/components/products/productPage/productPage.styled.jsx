import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: 32,

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const BlockSwiper = styled(Box)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    width: '100%',
    marginRight: 0,
    marginBottom: 16,
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
    marginRight: 16,
    marginBottom: 0,
  },
}));

export const BlockContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));
