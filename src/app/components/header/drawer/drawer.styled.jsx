import { Box, Button, ListItem, Typography } from '@mui/material';
import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Image from 'next/image';

export const LinkStyled = styled(Link)({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
});

export const DrawerBlock = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 260,
  height: '100%',
  padding: 16,
}));

export const ButtonToggle = styled(Button)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: 40,
  marginTop: 16,
  fontSize: '1.25rem',
  color: theme.palette.primary.main,
}));

export const IconApp = styled(AppsIcon)(({ theme }) => ({
  marginRight: 16,
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
}));

export const ListStyled = styled(List)({
  display: 'flex',
  flexDirection: 'column',
});

export const Item = styled(ListItem)({
  padding: 8,
  cursor: 'pointer',
});

export const ItemText = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 500,
  width: '100%',
});

export const IconProfile = styled(AccountCircleOutlinedIcon)(({ theme }) => ({
  marginRight: 16,
  fontSize: '1.5rem',
  color: theme.palette.primary.light,
}));
export const IconHome = styled(HomeIcon)(({ theme }) => ({
  marginRight: 16,
  fontSize: '1.5rem',
  color: theme.palette.primary.light,
}));
export const IconPhone = styled(PhoneIcon)(({ theme }) => ({
  marginRight: 16,
  fontSize: '1.5rem',
  color: theme.palette.primary.light,
}));
export const IconPay = styled(PaymentIcon)(({ theme }) => ({
  marginRight: 16,
  fontSize: '1.5rem',
  color: theme.palette.primary.light,
}));
export const IconShipping = styled(LocalShippingIcon)(({ theme }) => ({
  marginRight: 16,
  fontSize: '1.5rem',
  color: theme.palette.primary.light,
}));

export const ImageStyled = styled(Image)({
  height: '100%',
  zIndex: -1,
  opacity: 0.15,
  objectFit: 'cover',
});
