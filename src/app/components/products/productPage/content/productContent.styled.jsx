import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Block = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 8,
});

export const BlockBtn = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'left',
  width: '100%',
  [theme.breakpoints.up('s')]: {
    justifyContent: 'center',
  },
}));

export const PaperStyled = styled(Paper, {
  shouldForwardProp: prop => prop !== 'isover',
})(({ isover, theme }) => ({
  filter: isover ? 'grayscale(1)' : 'none',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 32,
  padding: 16,
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  opacity: 0.9,
}));
