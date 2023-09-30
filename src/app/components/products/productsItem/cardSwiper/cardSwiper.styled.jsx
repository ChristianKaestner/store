import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: 8,
  marginTop: 8,
  [theme.breakpoints.up('xs')]: {
    height: 160,
  },
  [theme.breakpoints.up('md')]: {
    height: 216,
  },
}));

export const LinkStyled = styled(Link)({
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const ImageStyled = styled(Image)(({ theme }) => ({
  transition: 'transform 500ms ease-in-out',
  objectFit: 'fill',
}));
