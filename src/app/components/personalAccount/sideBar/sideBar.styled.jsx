import { Typography, Tabs as MuiTabs, Tab as MuiTab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MenuText = styled(Typography)({
  marginLeft: 16,
  fontSize: '1.2rem',
  fontWeight: 500,
});

export const Tabs = styled(MuiTabs)({
  borderRight: 1,
  borderColor: 'transparent',
});

export const Tab = styled(MuiTab)(({ theme }) => ({
  alignItems: 'start',
  marginBottom: 16,
  borderRadius: 4,
  '&:hover': { backgroundColor: theme.palette.primary.dim },
}));
