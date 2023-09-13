import { FormControl, Slider as SliderMUI } from '@mui/material';
import { IconButton as IconButtonMUI, Box as BoxMUI } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PriceForm = styled(FormControl)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 16,
});

export const Slider = styled(SliderMUI)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    width: 20,
    height: 20,
    color: theme.palette.primary.light,
  },
  width: '90%',
  margin: 16,
  marginBottom: 0,
}));

export const IconButton = styled(IconButtonMUI)(({ theme }) => ({
  marginLeft: 8,
  color: theme.palette.primary.light,
}));

export const Box = styled(BoxMUI)({
  width: '85%',
  paddingLeft: 16,
});
