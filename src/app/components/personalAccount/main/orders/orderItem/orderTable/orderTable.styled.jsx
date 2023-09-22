import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Cell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: 4,
  },
  [theme.breakpoints.up('sm')]: {
    padding: 8,
  },
  [theme.breakpoints.up('md')]: {
    padding: 12,
  },
  [theme.breakpoints.up('lg')]: {
    padding: 16,
  },
}));
