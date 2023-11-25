import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const HeadBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 8,
  zIndex: 1,
  opacity: 0.9,
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
  marginBottom: 32,
});

export const NoReviewBlock = styled(Box)({
  position: 'relative',
  width: '100%',
  height: 500,
  pointerEvents: 'none',
});
