import { FormLabel, RadioGroup } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

export const Label = styled(FormLabel)({
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  marginBottom: 16,
  cursor: 'text',
  textTransform: 'capitalize',
});

export const BlockRadio = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',
});

export const IconCircle = styled(CircleIcon, {
  shouldForwardProp: prop => prop !== 'color',
})(({ color, theme }) => ({
  stroke: theme.palette.primary.neutral,
  fill: color,
}));

export const IconCircleChecked = styled(CheckCircleIcon, {
  shouldForwardProp: prop => prop !== 'color',
})(({ color, theme }) => ({
  stroke: theme.palette.primary.accent,
  // color === 'white'
  //   ? theme.palette.primary.dim
  //   : theme.palette.primary.accent,
  fill: color,
}));
