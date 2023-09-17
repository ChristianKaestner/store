import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const AsideBlock = styled(Paper)(({ theme }) => ({
  flexDirection: 'row',
  flexGrow: 1,
  width: 'auto',
  height: 160,
  MaxWidth: '30%',
  alignItems: 'center',
  padding: 16,

  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const ImageBlock = styled(Box)({
  position: 'relative',
  marginRight: 16,
});
