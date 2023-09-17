import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const HeadBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 8,
});

export const ReviewBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 16,
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

export const MainBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 32,
});
