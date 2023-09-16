import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
  position: 'relative',
  height: 200,
  padding: 8,
});

export const LinkStyled = styled(Link)({
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const ImageStyled = styled(Image)({
  transition: 'transform 500ms ease-in-out',
  objectFit: 'contain',
});
