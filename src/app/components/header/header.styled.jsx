import { AppBar as MuiAppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  direction: 'flex',
  justifyContent: 'center',
  height: 72,
  px: 0,
  backgroundColor: theme.palette.primary.main,
  zIndex: 999,
}));
