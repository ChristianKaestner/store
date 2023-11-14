import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonStyled = styled(Button, {
  shouldForwardProp: prop => prop !== 'width',
})(({ width, theme }) => ({
  width: 80,
  height: 40,
  backgroundColor: theme.palette.primary.light,
  margin: '0 16px',
  [theme.breakpoints.up('s')]: {
    width: 120,
  },
  [theme.breakpoints.up('sm')]: {
    width: width,
  },
}));
