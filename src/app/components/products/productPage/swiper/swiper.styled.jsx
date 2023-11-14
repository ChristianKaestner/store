import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SwiperContainer = styled(Box)(({ theme }) => ({
  height: 200,
  [theme.breakpoints.up('s')]: {
    height: 360,
  },
  [theme.breakpoints.up('sm')]: {
    height: 400,
  },
  [theme.breakpoints.up('md')]: {
    height: '80%',
  },
}));
