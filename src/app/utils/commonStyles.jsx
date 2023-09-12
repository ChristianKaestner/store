import { Box, FormControl, TextField, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

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
