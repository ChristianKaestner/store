import { Typography, Tabs as MuiTabs, Tab as MuiTab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '30%',
    marginRight: 16,
  },
}));

export const MenuText = styled(Typography)(({ theme }) => ({
  marginLeft: 16,
  fontSize: '1.2rem',
  fontWeight: 500,
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const Tabs = styled(MuiTabs)({
  borderRight: 1,
  borderColor: 'transparent',
});

export const Tab = styled(MuiTab)(({ theme }) => ({
  alignItems: 'start',
  marginBottom: 16,
  borderRadius: 4,
  color: theme.palette.primary.neutral,
  '&:hover': { backgroundColor: theme.palette.primary.dim },
}));
