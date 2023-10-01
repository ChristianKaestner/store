import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

export const FilterBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 8,
});

export const FilterBtn = styled(Button)(({ theme }) => ({
  height: 40,
  backgroundColor: 'transparent',
  color: theme.palette.primary.dim,
  border: `1px solid ${theme.palette.primary.dim}`,
  transition: 'all 300ms ease-in-out',
  borderRadius: 16,
  opacity: 0.9,
  '.MuiButton-endIcon': {
    '.MuiSvgIcon-root': {
      transition: 'all 300ms ease-in-out',
    },
  },
  '&:hover': {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.dim,
    '.MuiButton-endIcon': {
      '.MuiSvgIcon-root': {
        transform: 'scale(1.1)',
        color: theme.palette.primary.hot,
      },
    },
  },
}));

export const IconClose = styled(CloseIcon)({
  fontSize: '1rem',
});
