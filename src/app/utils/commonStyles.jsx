import { Box, FormControl, TextField, FormControlLabel } from '@mui/material';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const colors = {
  main: '#324376',
  light: '#586ba4',
  info: '#f5dd90',
  accent: '#f68e5f',
  hot: '#f76c5e',
  dim: '#f5f6fa',
  text: '#221f1f',
  neutral: '#747474',
};

export const Form = styled(FormControl)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'baseline',
});

export const Row = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
});

export const RowCenter = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const Column = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const ColumnCenter = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Label = styled(FormControlLabel)(({ theme }) => ({
  width: '100%',
  borderRadius: 1,
  '&:hover': { backgroundColor: theme.palette.primary.dim },
}));

export const List = styled(Box)({
  width: '100%',
  listStyle: 'none',
});

export const ContainerFilter = styled(Box)({
  flexWrap: 'nowrap',
  width: '100%',
  maxHeight: 400,
  overflowY: 'auto',
  overflowX: 'hidden',
  listStyle: 'none',
  marginTop: 16,
  paddingLeft: 16,
});

export const InputProps = styled(TextField, {
  shouldForwardProp: prop => prop !== 'err',
})(({ err, theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : 'rgba(0, 0, 0, 0.23)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : theme.palette.primary.light,
  },

  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: err
        ? theme.palette.primary.hot
        : theme.palette.primary.light,
    },
  },
}));

export const swiperStyles = {
  width: '100%',
  height: '400px',
  borderRadius: '4px',
  '--swiper-pagination-color': colors.accent,
  '--swiper-pagination-bullet-inactive-color': colors.neutral,
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '12px',
  '--swiper-pagination-bullet-horizontal-gap': '8px',
};

export const IconBtnPrev = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 'calc(50% - 25px)',
  left: 0,
  width: 50,
  height: 50,
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.primary.dim,
  zIndex: 2,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.neutral,
  },
}));

export const IconBtnNavigate = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'prev' && prop !== 'next',
})(({ prev, next, theme }) => ({
  position: 'absolute',
  top: 'calc(50% - 25px)',
  right: next,
  left: prev,
  width: 50,
  height: 50,
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.primary.dim,
  zIndex: 2,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.neutral,
  },
}));
