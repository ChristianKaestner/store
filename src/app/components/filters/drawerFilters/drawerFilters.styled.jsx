import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

export const FilterBtn = styled(Button)(({ theme }) => ({
  height: 40,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dim,
  [theme.breakpoints.up('xs')]: {
    width: 150,
  },
  [theme.breakpoints.up('sm')]: {
    width: 200,
  },
}));

export const DrawerBlock = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 260,
  height: '100%',
  backgroundColor: theme.palette.primary.main,
}));

export const StyledBox = styled(Box)({
  padding: 16,
  height: '100%',
  overflowY: 'auto',
});

export const StyledBtn = styled(Button)(({ theme }) => ({
  width: 'auto',
  height: 40,
  color: theme.palette.primary.dim,
  '&:hover': { color: theme.palette.primary.accent },
}));
