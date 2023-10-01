import { Box, FormControl, TextField, FormControlLabel } from '@mui/material';
import { Typography, TableCell, Badge } from '@mui/material';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const colors = {
  main: '#001219',
  light: '#005f73',
  info: '#e9d8a6',
  accent: '#ee9b00',
  hot: '#ae2012',
  dim: '#f5f6fa',
  text: '#221f1f',
  neutral: '#747474',
  badge: '#939393',
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

export const RowBetween = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
  width: '110%',
  borderRadius: 1,
  '&:hover': { backgroundColor: theme.palette.primary.iconbtn },
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
  input: { color: err ? theme.palette.primary.hot : theme.palette.primary.dim },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : theme.palette.primary.dim,
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
  borderRadius: '4px',
  '--swiper-pagination-color': colors.accent,
  '--swiper-pagination-bullet-inactive-color': colors.badge,
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

export const TextNeutral = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  color: theme.palette.primary.neutral,
}));

export const TextBold = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  color: theme.palette.primary.dim,
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
  color: theme.palette.primary.dim,
}));

export const CellNeutral = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  color: theme.palette.primary.neutral,
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
}));

export const CellBold = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  color: theme.palette.primary.dim,
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
}));

export const Span = styled(Box)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.primary.dim,
}));

export const Counter = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -16,
    top: 13,
    backgroundColor: theme.palette.primary.iconbtn,
    color: theme.palette.primary.dim,
  },
}));

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));
