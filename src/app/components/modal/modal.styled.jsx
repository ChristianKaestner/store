import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalBlock = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'location' &&
    prop !== 'width' &&
    prop !== 'height' &&
    prop !== 'maxHeight',
})(({ location, width, height, maxHeight, theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  padding: '32px 16px',
  borderRadius: 4,
  border: '2px solid #586ba4',
  background: '#fff',
  color: '#000',

  [theme.breakpoints.up('sm')]: {
    top: location.top,
    left: location.left,
    width: width,
    height: height,
    maxHeight: maxHeight,
    maxWidth: 1488,
    transform: `translate(-${location.x}, -${location.y})`,
    padding: 32,
  },
}));
