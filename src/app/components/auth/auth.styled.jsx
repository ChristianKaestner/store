import { Box, Divider, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  overflowY: 'auto',

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    padding: '16px 0px',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: 0,
  },
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 16,
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '100%',
  height: 48,
  marginTop: 16,
  color: theme.palette.primary.dim,
  borderColor: theme.palette.primary.dim,
  '&:hover': { borderColor: theme.palette.primary.light },
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: '0px 16px',
  color: theme.palette.primary.dim,
  '&::before, &::after': {
    borderColor: theme.palette.primary.dim,
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none',
    padding: '16px 0px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    padding: 0,
  },
}));

export const ChipStyled = styled(Chip)(({ theme }) => ({
  borderColor: theme.palette.primary.dim,
  color: theme.palette.primary.dim,
}));
