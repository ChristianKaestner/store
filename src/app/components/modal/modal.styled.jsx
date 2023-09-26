import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Backdrop = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1200,
  body: {
    overflow: 'hidden',
  },
});

export const ModalWindow = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'open' &&
    prop !== 'location' &&
    prop !== 'width' &&
    prop !== 'height' &&
    prop !== 'maxHeight',
})(({ open, location, width, height, maxHeight, theme }) => ({
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
  opacity: open ? '1' : '0',
  animation: `${open ? fadeIn : fadeOut} 0.3s forwards`,
  body: {
    overflow: 'hidden',
  },

  [theme.breakpoints.up('sm')]: {
    top: location.top,
    left: location.left,
    width: width,
    height: height,
    maxHeight: maxHeight,
    transform: `translate(-${location.x}, -${location.y})`,
    padding: 32,
  },
}));
