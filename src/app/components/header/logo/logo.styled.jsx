import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  height: 40,
});

export const IconBlock = styled(Box, {
  shouldForwardProp: prop => prop !== 'isMobile',
})(({ isMobile, theme }) => ({
  width: 40,
  height: 40,
  marginRight: 16,
  [theme.breakpoints.up('xs')]: {
    display: isMobile ? 'flex' : 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: isMobile ? 'none' : 'flex',
  },
}));

export const LogoText = styled(Typography, {
  shouldForwardProp: prop => prop !== 'isMobile',
})(({ isMobile, theme }) => ({
  marginRight: 16,
  color: theme.palette.primary.light,
  fontSize: '2rem',

  [theme.breakpoints.up('xs')]: {
    display: isMobile ? 'flex' : 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: isMobile ? 'none' : 'flex',
  },
}));
