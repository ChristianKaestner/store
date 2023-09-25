import { styled } from '@mui/material/styles';

import { IconButton } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

export const IconBtnNavigate = styled(IconButton, {
  shouldForwardProp: prop =>
    prop !== 'prev' && prop !== 'next' && prop !== 'color',
})(({ prev, next, color, theme }) => ({
  position: 'absolute',
  top: 'calc(50% - 25px)',
  right: next,
  left: prev,
  width: 56,
  height: 40,
  borderRadius: 24,
  color: color === 'white' ? '#fff' : theme.palette.primary.light,
  border:
    color === 'white'
      ? `1px solid #fff`
      : `1px solid ${theme.palette.primary.light}`,
  backgroundColor: 'transparent',
  zIndex: 2,
  cursor: 'pointer',
  '.MuiSvgIcon-root': {
    position: 'absolute',
    right: next === 0 ? 'calc(50% - 12px)' : next,
    left: prev === 0 ? 'calc(50% - 12px)' : prev,
    transition: 'all 300ms ease-out',
  },

  '&:hover': {
    '.MuiSvgIcon-root': {
      right: next,
      left: prev,
    },
  },
}));

export const IconNext = styled(EastIcon)({
  fontSize: '1.5rem',
});

export const IconPrev = styled(WestIcon)({
  fontSize: '1.5rem',
});
